---
title: Redux-Observable
---

`Redux-Observable` 是一个基于 RXJS 的非常有威力的 Redux 中间件。他通过抽象出与 Redux 的连接并处理订阅，让开发者免于直接 `listen` 或 `dispatch` `actions`。  
最基本的操作，可以简化为，在 `subscribe` 所有 `epics` 的同时，调用 Redux 的`dispatch` 函数

```javascript
allYourObservablesTogether.subscribe(store.dispatch);
```

### Side-Effects

因为 Redux 调用的 Action ， 都是通过 Reducer  ，仅修改 State，所以一般我们用 `tap`  来处理 side-effects（比如， `console.log` ）。 `tap`  几乎与 `Promise.then()`  一样，除了他不会修改 pipeline 中的 state。  
由于 Epics 必须 emmit 一个 action ，所以这里我们用 `ignoreElements`  来结束我们的 pipeline，它在 tap 后直接结束这个 pipeline，不会 emmit action。

```javascript
const startLoggingServiceEpic = action$ =>
    action$.pipe(
        ofType(UPDATE_USER_INFO),
        map(({ email, phone, userName }) => ({
            emailAddress: email,
            phoneNumber: phone,
            userName,
        })),
        tap(updateLoggingService),
        ignoreElements(),
    );
```

### 单次执行

仅在 Action 首次触发时执行

```javascript
const startChatSystemEpic = action$ =>
    action$.pipe(
        ofType(START_CHAT_CLIENT),
        take(1),
        tap(startChatClient),
        ignoreElements(),
    );
```

### Immediately Executing Actions

将一个 Epic 与 Redux-Observable 初始化偶尔在一起并不是一个好主意。但这么做可以避免调用一个 action 来触发 Epic。

```javascript
// Redux-Observable 1.x.x
const logAppVersionEpic = () =>
    of(appVersion).pipe(tap(console.info), ignoreElements());

// Another Option for Redux-Observable 1.x.x
const logAppVersionEpic = () =>
    EMPTY.pipe(defaultIfEmpty(appVersion), tap(console.info), ignoreElements());

// Redux-Observable 0.x.x
const logAppVersionEpic = () =>
    timer(0).pipe(mapTo(appVersion), tap(console.info), ignoreElements());
```

在 version 1 之前，Redux-Observable 需要使用 `timer(0)`  才能处理立即执行。  
`of`  会一个接一个地 emit 任何传入他的任何参数。  
`EMPTY`  是一个常量 observable，在被订阅时，直接 complete。然后， `defaultIfEmpty`  将其参数在 pipeline 中传递下去。

### Updating State

```javascript
const storeUserInfoEpic = action$ =>
    action$.pipe(
        ofType(UPDATE_USER_INFO),
        map(({ authInfo, userInfo }) => ({
            accessToken: authInfo.accessToken,
            emailAddress: userInfo.email,
            username: userInfo.username,
        })),
        map(storeUserInfo),
    );
```

其中，第一个 map 用来转换数据格式，第二个触发对应的 action。  
因为在一个 observable pipeline 中，可以做很多事情，所以一个比较好的流程是，使用非常简单的、可复用的 reducers，利用 epics 来实现数据转换、业务逻辑。

### Utilizing the Store with Actions

```javascript
const hideLoginModalEpic = (action$, state$) =>
    action$.pipe(
        ofType(UPDATE_AUTH_INFO),
        map(() => state$.value),
        map(authInfoSelector),
        pluck('isAuthenticated'),
        filter(Boolean),
        mapTo({ namespace: 'login' }),
        map(closeModal),
    );
```

主要应用场景，希望在某一 action 完成后，触发依赖于 state 的后续 action。  
在大多数 observables 中并不存在 `.value`  属性，但是 `state$`  是一个 BehaviorSubject，可以在任何时候获取其 value。

### Listening to State Updates Directly

```javascript
const hideLoginModalEpic = (action$, state$) =>
    state$.pipe(
        map(authInfoSelector),
        pluck('isAuthenticated'),
        distinctUntilChanged(),
        filter(Boolean),
        mapTo({ namespace: 'login' }),
        map(closeModal),
    );
```

`distinctUntilChanged`  会持有前一阶段 state 的 value，并与当前进行比较。当 value 相同时，pipeline 结束；当 value 有改变时，pipeline 继续。

### Javascript Events

我们经常需要监听 javascript events，例如 localStorage 更改，iframe 通信，以及与第三方 library 交互。鉴于第三方 lib 很少有使用 observable，所以这种场景很常见。

```javascript
const windowSizeEpic = () =>
    fromEvent(window, 'resize').pipe(
        throttleTime((1 / 60) * 1000), // 此处应使用animationFrameScheduler，为方便理解故简化
        map(windowSizeChanged),
    );

someThirdPartyLibrary.on('ready', () => {});

fromEvent(someThirdPartyLibrary, 'ready').pipe();
```

### AJAX Calls

相较于直接引入 ajax，更好的做法是通过 middleware function 将其作为依赖引入。这样做的好处主要来源于以下两方面：

1. easier debugging
1. server-side rendering，将 ajax 替换为 axios 或 fetch

```javascript
const epicOptions = {
    dependencies: {
        ajax,
    },
};

const epicMiddleware = createEpicMiddleware(epicOptions);

const fetchPermissionsEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(FETCH_PERMISSIONS),
        map(state$.value),
        map(accessTokenSelector),
        switchMap(accessToken =>
            ajax({
                crossDomain: true,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                url: 'https://example.com/permissions',
            }).pipe(pluck('response'), map(storePermissions)),
        ),
    );
```

`switchMap`  是截至目前，我们见到过的最重要的 operator，它允许我们将 observables 放到一个 pipeline 中，链式处理。

> 注：为了方便对 response 最拦截处理，我引入了[axios-observable](https://www.npmjs.com/package/axios-observable)，未使用 rxjs 附带的 ajax。

### Cancelling AJAX Calls When Using MergeMap

利用 `mergeMap`  我们可以为需要发送多次的相似 ajax 请求，创建通用的 epic。  
当我们使用 `mergeMap`  替换 `switchMap`  时，它会创建一个新的 observable，并 subscribe。若操作不当，可能触发内存泄漏。如果想要使用类似 `switchMap`  的取消功能，我们使用 `takeUtil` 。  
`takeUtil`  接收一个 observable，不会向 pipeline 中传入值。与 `take`一样，当传入的 observable emmit 时， `takeUtil` complete 当前的 observable。  
在我们的例子中， `takeUtil`  会监听具有相同 `permissionType`  的 `FETCH_PERMISSION` action。如果监听到，我们通过 complete observable 的方式来取消 ajax call。以此避免 race condition。

```javascript
const ofPermissionType = requiredPermissionType =>
    filter(({ permissionType }) => requiredPermissionType === permissionType);

const fetchPermissionEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(FETCH_PERMISSION),
        mergeMap(({ permissionType }) =>
            of(state$.value).pipe(
                takeUntil(
                    action$.pipe(
                        ofType(FETCH_PERMISSION),
                        ofPermissionType(permissionType),
                    ),
                ),
                map(accessTokenSelector),
                switchMap(accessToken =>
                    ajax({
                        crossDomain: true,
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        url: 'https://example.com/permissions'
                            .concat('?')
                            .concat('permissionType=')
                            .concat(permissionType),
                    }).pipe(
                        pluck('response'),
                        map(permissionValue => ({
                            permissionType,
                            permissionValue,
                        })),
                        map(storePermission),
                    ),
                ),
            ),
        ),
    );
```

### Delaying AJAX Request

有时候我们希望限制同时发出的 ajax 请求数量。比如，有 10 个文件待上传，我们可能希望同时上传两个文件。在这种情况下

-   `mergeMap`  会一次性发送 10 个文件
-   `mergeMap`  第二个参数，传入 2， This can be really hard to catch if you keep everything in the same epic though.
-   `concatMap`  会一个文件、一个文件地发送

比较好的方案是如下，使用 map 和 mergeAll

```javascript
const ofPermissionType = requiredPermissionType =>
    filter(({ permissionType }) => requiredPermissionType === permissionType);

const fetchPermissionsEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(FETCH_PERMISSIONS),
        map(props => ({
            ...props,
            accessToken: accessTokenSelector(state$.value),
        })),
        mergeMap(({ accessToken, permissionTypes }) =>
            from(permissionTypes).pipe(
                map(permissionType =>
                    of(permissionType).pipe(
                        takeUntil(
                            action$.pipe(
                                ofType(FETCH_PERMISSIONS),
                                switchMap(
                                    ({ permissionTypes }) => permissionTypes,
                                ),
                                ofPermissionType(permissionType),
                            ),
                        ),
                        switchMap(() =>
                            ajax({
                                crossDomain: true,
                                headers: {
                                    Authorization: `Bearer ${accessToken}`,
                                },
                                url: 'https://example.com/permissions'
                                    .concat('?')
                                    .concat('permissionType=')
                                    .concat(permissionType),
                            }).pipe(
                                pluck('response'),
                                map(permissionValue => ({
                                    permissionType,
                                    permissionValue,
                                })),
                                map(storePermission),
                            ),
                        ),
                    ),
                ),
                mergeAll(2),
            ),
        ),
    );
```

其中， `from(permissionTypes)`  会将每个 permissionType 以单独的 value，发送至 pipeline。我们将这些全部 map 到一个新的 observable，然后通过 `mergeAll(2)`  将其限制为同时 merge map 两项。  
另一个不同在于 `takeUtil`  的处理方式。此处我们需要遍历 permissionType，寻找是否有与当前 action 匹配的请求。如果有，则取消 ajax。

### Waiting for Merge-Mapped Observables

如果想等待所有请求返回，再出发一个 action，使用 `toArray`  和 `multicast`

```javascript
const ofPermissionType = requiredPermissionType =>
    filter(({ permissionType }) => requiredPermissionType === permissionType);

const fetchPermissionsEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(FETCH_PERMISSIONS),
        map(props => ({
            ...props,
            accessToken: accessTokenSelector(state$.value),
        })),
        mergeMap(({ accessToken, permissionTypes }) =>
            from(permissionTypes).pipe(
                map(permissionType =>
                    of(permissionType).pipe(
                        takeUntil(
                            action$.pipe(
                                ofType(FETCH_PERMISSIONS),
                                switchMap(
                                    ({ permissionTypes }) => permissionTypes,
                                ),
                                ofPermissionType(permissionType),
                            ),
                        ),
                        switchMap(() =>
                            ajax({
                                crossDomain: true,
                                headers: {
                                    Authorization: `Bearer ${accessToken}`,
                                },
                                url: 'https://example.com/permissions'
                                    .concat('?')
                                    .concat('permissionType=')
                                    .concat(permissionType),
                            }).pipe(
                                pluck('response'),
                                map(permissionValue => ({
                                    permissionType,
                                    permissionValue,
                                })),
                                map(storePermission),
                                catchError(error => of(caughtError(error))),
                            ),
                        ),
                    ),
                ),
                mergeAll(2),
                multicast(new Subject(), source$ =>
                    source$.pipe(
                        mergeOperator(
                            source$.pipe(
                                toArray(),
                                map(finishedStoringPermissions),
                            ),
                        ),
                    ),
                ),
            ),
        ),
    );
```

`Subject`  既是 observable，又是 observer。所以，我们创建了一个独立的 Subject，用以接收 pipeline 此处的输出，同时连接到 source observable。接下来将 source observable 与自身 merge，然后 pipe off merged observable。  
`multicast`  紧接着 `mergeAll` ，所以会接收每一个 permissionType 的 response。一旦所有的 type 都经过了 pipeline 的这个位置， `toArray`  会 emit 由 ajax response 构成的数组。因为我们在前面已经处理过这些 response，所以在这里，直接 map finishedStoringPermissions。

一个可运行的简化例子如下：

```javascript
const {
    map,
    merge: mergeOperator,
    multicast,
    toArray,
} = require('rxjs/operators');
const { range, Subject } = require('rxjs');

range(1, 4) // same as from([1, 2, 3, 4])
    .pipe(
        map(t => t + 1),
        multicast(new Subject(), source$ =>
            source$.pipe(mergeOperator(source$.pipe(toArray()))),
        ),
    )
    .subscribe(console.log);

// 2
// 3
// 4
// 5
// [ 2, 3, 4, 5 ]
```

### Catching AJAX Errors

`catchError`  的参数是一个函数，该函数返回一个 observable，所以，确认触发一个 action。

```javascript
const fetchPermissionsEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(FETCH_PERMISSIONS),
        map(state$.value),
        map(accessTokenSelector),
        switchMap(accessToken =>
            ajax({
                crossDomain: true,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                url: 'https://example.com/permissions',
            }).pipe(
                pluck('response'),
                map(storePermissions),
                catchError(error =>
                    of(
                        openModal({
                            message: error,
                            namespace: 'error',
                            stackTrace: error.stack,
                        }),
                    ),
                ),
            ),
        ),
    );
```

### Generic Error Catching

```javascript
const storeCurrentUrlEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(GET_CURRENT_URL),
        map(() => window.location.href),
        map(storeCurrentUrl),
        catchError(error =>
            merge(of(storeCurrentUrl('')), of(logError(error))),
        ),
    );
```

当我们将多个 actions 作为参数分别传入`merge`  时， `merge`  帮助我们同时运行这些 actions。  
同时需要注意的是，rxjs 还有一个 operator 版本的 merge。我想劝你避免使用它，但由于 rxjs 缺少 `finalize`  
operator，所以难免会使用它。 `tap`  是一个类似 finalize 的 operator，但是它只能触发副作用，而不能运行 action。

关于 `merge`  的复杂用法：

```javascript
const namespace = 'fetchPermissions';

const fetchPermissionsEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(FETCH_PERMISSIONS),
        map(state$.value),
        map(accessTokenSelector),
        switchMap(accessToken =>
            merge(
                of(
                    loading({
                        namespace,
                    }),
                ),
                ajax({
                    crossDomain: true,
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    url: 'https://example.com/permissions',
                }).pipe(
                    pluck('response'),
                    map(storePermissions),
                    switchMap(action =>
                        merge(
                            of(action),
                            of(
                                loaded({
                                    namespace,
                                }),
                            ),
                        ),
                    ),
                    catchError(error =>
                        merge(
                            of(
                                openModal({
                                    message: error,
                                    namespace: 'error',
                                    stackTrace: error.stack,
                                }),
                            ),
                            of(
                                loaded({
                                    namespace,
                                }),
                            ),
                        ),
                    ),
                ),
            ),
        ),
    );
```

通过 `merge operator`  避免两次 loaded

```javascript
const namespace = 'fetchPermissions';

const fetchPermissionsEpic = (action$, state$, { ajax }) =>
    action$.pipe(
        ofType(FETCH_PERMISSIONS),
        map(state$.value),
        map(accessTokenSelector),
        switchMap(accessToken =>
            merge(
                of(
                    loading({
                        namespace,
                    }),
                ),
                ajax({
                    crossDomain: true,
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    url: 'https://example.com/permissions',
                }).pipe(
                    pluck('response'),
                    map(storePermissions),
                    catchError(error =>
                        of(
                            openModal({
                                message: error,
                                namespace: 'error',
                                stackTrace: error.stack,
                            }),
                        ),
                    ),
                    mergeOperator(
                        of(
                            loaded({
                                namespace,
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );
```

My solution

```javascript
export const rootEpic = (action$, store) =>
    combineEpics(homeEpic, ...otherEpics)(action$, store).pipe(
        catchError((error, source) =>
            merge(
                of({ type: HIDE_LOADING_MODAL }),
                of(() => console.log(error)),
                source,
            ),
        ),
    );
```

### Listening to Two Observables

`race` emit 两个 observables 中较早完成的。需要注意的一点是， `race`  不会立即结束，而是会继续监听。当一个 observable emit 后，它会让这个 emission 通过，同时继续等待另一个 observable emit。在另一个也提交后，它会回到原点，重新等待两个 observable 的下一轮 race。只要 race active，这个过程会一直继续。 `take(1)`  用以干掉 infinite wait issue。  
`filter`  这里也很诡异，例子作者的意思是 HIDE_ERROR_NOTIFICATION 与 hideErrorNotification 做的事情类似。所以用户自己触发  HIDE_ERROR_NOTIFICATION 时，不需要处理。

```javascript
const showErrorNotificationEpic = action$ =>
    action$.pipe(
        ofType(SHOW_ERROR_NOTIFICATION),
        switchMap(() =>
            race(
                timer(5000),
                action$.pipe(ofType(HIDE_ERROR_NOTIFICATION), take(1)),
            ),
        ),
        filter(({ type }) => type !== HIDE_ERROR_NOTIFICATION),
        map(hideErrorNotification),
    );
```

### Race to the State

设想这样一种场景，component 会发送依赖 accessToken 的请求，而 component 加载的时候，state 中的 accessToken 还没有 ready。这种情况，我们并不想发送这个 ajax 请求。下面是一个错误示例，accessToken 很可能是 undefined。

```javascript
const storeInventoryItemsEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_INVENTORY_ITEMS),
        map(state$.value),
        map(accessTokenSelector),
        switchMap(accessToken =>
            ajax({
                crossDomain: true,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                url: 'https://example.com/inventory-items',
            }).pipe(pluck('response'), map(storeInventoryItems)),
        ),
    );
```

我们通过监听 `state$` ，以及后面的 `filter(Boolean)`  来确保在 accessToken ready 之后再发送 ajax 请求。  
这么做的原理， `state$`  是一种特殊的 observable，被称为 `BehaviorSubject` 。这意味着， `state$`  永远有一个值，与此同时， `action$`  是 stateless 的，且只能监听 actions。  
在另一些场景中，你可能并不想等待 accessToken ，这种情况下，可以在 `map(accessTokenSelector)`  后面写一些逻辑来展示 error。

```javascript
const storeInventoryItemsEpic = (action$, state$) =>
    action$.pipe(
        ofType(FETCH_INVENTORY_ITEMS),
        switchMap(
            state$.pipe(
                map(accessTokenSelector),
                filter(Boolean),
                take(1),
                switchMap(accessToken =>
                    ajax({
                        crossDomain: true,
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        url: 'https://example.com/inventory-items',
                    }).pipe(pluck('response'), map(storeInventoryItems)),
                ),
            ),
        ),
    );
```

### Conclusion

这是作者 9 个月积累的结果，希望你能有所收获。  
作者所有基于 Redux-Observable 的项目都使用了这些模块。当然还有更多 solution，但是这些足够起步了。

## References

[Redux-Observalable Can Solve Your State Problems](https://itnext.io/redux-observable-can-solve-your-state-problems-15b23a9649d7)  
[rxjs](https://rxjs-dev.firebaseapp.com/)  
[redux-observable](https://redux-observable.js.org/)  

