---
title: Cache
---
## Defination
缓存位于web server （可能是一个或多个）与 client（同样，可能是一个或多个）之间，监测请求，保存拷贝；接下来，如果有同样的请求（url），直接返回拷贝，避免再次请求服务器。

## 分类
- Browser Caches
   - 保存在硬盘，仅为当前用户使用
- Proxy Caches
   - 由大公司或ISP（network administrators）在网络节点部署，
- Gateway Caches
   - 网络服务（Webmasters）部署，代表为CDN

## 如何工作
#### Html Meta Tags与Http Headers
HTML Meta Tags的方式仅被一小部分浏览器缓存支持，proxy caches不知道，所以不要使用

1. 如果response's headers告知Caches不保存，则不保存
1. 如果请求的是authenticated 或 secure(比如https)信息，shared caches不会缓存。
1. 在以下情况，已缓存的representation会被视作fresh，即无需请求服务器，直接返回客户端：
   1. 有类似expiry time或者其他age-controlling header，且处在fresh period
   1. cache最近见到过这个representation，而该资源最近的更新，在相对很久之前。
4. 当一个representation过期时，cache会请求server进行validate，或者server会告知cache，缓存是否可用。
4. 某些特殊情况，比如，断网，cache可以不请求server，直接返回cache。

#### Expires
- 最基本的手段，告知缓存，当前representation在什么时间范围内可用。
- 有三种形式：绝对时间，相对于最后一次获取的时间，相对于最后一次修改的时间。
- 适合于静态图像等，不太改变的资源。
- 唯一有效值，是GMT时区的Http date。其他值均被视为 in the past。

#### Cache-Control
http1.1 中定义，取代之前的headers(Expires)。

- no-cache：必须请求服务器，做校验。
- no-store：不允许浏览器和任何中间媒介存储，每次都必须请求，重新下载。
- public：即使是包含认证内容，或者不适合做Cache的状态码，依然可以缓存。一般不需显式声明，max-age等同样意味着可以缓存。
   - `Cache-Control: public, no-cache` 表示，（proxy caches等）在释放缓存的资源前，必须提交用户的认证信息。
- private：内容仅对单个用户可缓存，所以浏览器可以进行缓存，而中间媒介不可以。
- max-age：内容可以复用的最大时间，单位为s。

    ![image.png](/img/docs/cache/cache.png)

- must-revalidate：告诉浏览器、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。Servers SHOULD send the must-revalidate directive if and only if failure to revalidate a request on the entity could result in incorrect operation, such as a silently unexecuted financial transaction. 
- no-cache 与 must-revalidate, max-age=0 的区别：
   1. 对于must-revalidate，当浏览器请求服务器验证时，服务器无法访问，那么缓存需要返回一个504 Gateway Timeout的错误（这里应该是像nginx这样的代理来返回，若是浏览器如chrome，将直接是ERR_CONNECTION_REFUSED，即无法访问，连接被拒绝）。
   1. 对于no-cache，同样情况，则会照样使用本地缓存显示给用户（有可能显示的比较旧的资源）。
   1. 所以must-revalidate用在对事务要求比较严苛的情况下使用（比如支付）。



#### Validators
Last-modified/If-Modified-Since<br />ETag/If-not-match


## Tips
- 使用一贯的Url
- 使用公共的图片库，或者其他资源库
- 将不经常变化的资源，使用 `Cache-Control: max-age` 进行缓存
- 给经常更新的页面，设置合适的 max-age 或 expiration time。
- 如果一个资源，尤其是可下载的文件，发生改变，改变其命名。
- 不要对文件做不必要的变更。
- 仅在必须处使用cookie
- 尽可能少的使用SSL
- 使用 [REDbot](https://redbot.org/)检测你的网页



## Reference:
[https://www.mnot.net/cache_docs/](https://www.mnot.net/cache_docs/)

