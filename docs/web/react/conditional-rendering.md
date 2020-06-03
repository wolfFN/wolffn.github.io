---
title: Conditional Rendering
---

> 本节主要记录 react 中条件常见的条件渲染写法。

在 `JSX`  中，我们可以直接使用 pure javascript 来进行条件控制。

### IF ELSE

本人更倾向于省略掉 else，将最通用的情况作为默认返回。

```javascript
function List({ list }) {
    if (!list) {
        return null;
    }

    if (!list.length) {
        return <p>Sorry, the list is empty.</p>;
    } else {
        return (
            <div>
                {list.map(item => (
                    <ListItem item={item} />
                ))}
            </div>
        );
    }
}
```

### Ternary Operation

```javascript
function Item({ item, mode }) {
    const isEditMode = mode === 'EDIT';
    return <div>{isEditMode ? <ItemEdit item={item} /> : <ItemView item={item} />}</div>;
}
```

### Logical && Operator

```javascript
function LoadingIndicator({ isLoading }) {
    return <div>{isLoading && <p>Loading...</p>}</div>;
}
```

### Switch Case Operator

```javascript
function Notification({ text, state }) {
    switch (state) {
        case 'info':
            return <Info text={text} />;
        case 'warning':
            return <Warning text={text} />;
        case 'error':
            return <Error text={text} />;
        default:
            return null;
    }
}
Notification.propTypes = {
    text: React.PropTypes.string,
    state: React.PropTypes.oneOf(['info', 'warning', 'error']),
};

// 可以使用立即执行函数来 inline switch case
function Notification({ text, state }) {
    return (
        <div>
            {(() => {
                switch (state) {
                    case 'info':
                        return <Info text={text} />;
                    case 'warning':
                        return <Warning text={text} />;
                    case 'error':
                        return <Error text={text} />;
                    default:
                        return null;
                }
            })()}
        </div>
    );
}
```

### Enums

这是对 switch case 的改进，有更好的可读性。

```javascript
// external static enum
const NOTIFICATION_STATES = {
    info: <Info />,
    warning: <Warning />,
    error: <Error />,
};
function Notification({ state }) {
    return <div>{NOTIFICATION_STATES[state]}</div>;
}

// function depend on the text property
const getSpecificNotification = text => ({
    info: <Info text={text} />,
    warning: <Warning text={text} />,
    error: <Error text={text} />,
});
function Notification({ state, text }) {
    return <div>{getSpecificNotification(text)[state]}</div>;
}

//inline object
function FooBarOrFooOrBar({ isFoo, isBar }) {
    const key = `${isFoo}-${isBar}`;
    return (
        <div>
            {
                {
                    ['true-true']: <FooBar />,
                    ['true-false']: <Foo />,
                    ['false-true']: <Bar />,
                    ['false-false']: null,
                }[key]
            }
        </div>
    );
}
FooBarOrFooOrBar.propTypes = {
    isFoo: React.PropTypes.boolean.isRequired,
    isBar: React.PropTypes.boolean.isRequired,
};
```

### Multi Level

条件渲染可以嵌套，不过可读性很差。建议将其分解为包含条件渲染的 small components。<br />即使这样，可读性也很一般，可以继续尝试 HOC。

```javascript
function List({ list }) {
    const isList = list && list.length;
    return (
        <div>
            {isList ? (
                <div>
                    {list.map(item => (
                        <ListItem item={item} />
                    ))}
                </div>
            ) : (
                <NoList isNull={!list} isEmpty={list && !list.length} />
            )}
        </div>
    );
}
function NoList({ isNull, isEmpty }) {
    return !isNull && isEmpty && <p>Sorry, the list is empty.</p>;
}
```

### High Order Components

[Read More](https://www.robinwieruch.de/gentle-introduction-higher-order-components)

```javascript
// HOC declaration
function withLoadingIndicator(Component) {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (!isLoading) {
            return <Component {...props} />;
        }
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    };
}
// Usage
const ListWithLoadingIndicator = withLoadingIndicator(List);
<ListWithLoadingIndicator isLoading={props.isLoading} list={props.list} />;
```

## Reference

-   [All React Conditional Rendering Techniques](https://www.robinwieruch.de/conditional-rendering-react)
