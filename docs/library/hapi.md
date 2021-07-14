---
title: Hapi
---

## TODO

[https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize](https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize)

# Lifecycle

![Hapi LifeCircle.png](/img/docs/hapi/life-circle.png)

# plugins

Methods and decorations do have different intended purposes. In short:

-   plugins should utilize decorations to extend the framework with additional functionality/configuration.
-   plugins should utilize methods in order to implement application business logic, reach out to external services, and interface with hapi's caching layer.

#### Examples

1. [vision](https://github.com/hapijs/vision/blob/master/lib/index.js) providing the ability to configure a view manager and render templates using a view manager
1. [hapijs.com's services](https://github.com/outmoded/hapijs.com/blob/master/lib/github.js#L221-L247) that reach out to github to render the API documentation and cache the result

## Boilerplates

[https://github.com/rjmreis/hapi-api](https://github.com/rjmreis/hapi-api)

```
├── api/
|   ├── handlers/
|   |   └── home.js   * Sample handler
|   └── index.js      * REST routes
├── config/
|   ├── manifest.js   * Server configuration
|   └── secret.js     * Secret key
├── test/
|   └── api.js        * API test
├── server.js         * Server definition (uses the Glue plugin to read a manifest)
├── auth.js           * Auth strategies
└── package.json
```

以 server.js 作为入口，配合 auth.js 的授权策略，将具体的 api 丢到 api 目录，结构还是相当清晰的。  config 和 test 遵循了大部分框架的配置，比较有意思的 config/secret.js，Secret key 在部署的时候需要配置的，很多框架是没有做这个的。

从这个目录看，比较适合微服务类的小而美的 api 服务。

## 授权

### scope

[hapi scope blog](https://blog.andyet.com/2015/06/16/harnessing-hapi-scopes/)  
 [Authentication and Authorization](https://medium.com/@poeticninja/authentication-and-authorization-with-hapi-5529b5ecc8ec)

### acl

每一项资源，都配有一个列表，这个列表记录的就是哪些用户可以对这项资源执行 CRUD 中的那些操作。  
 当系统试图访问这项资源时，会首先检查这个列表中是否有关于当前用户的访问权限，从而确定当前用户可否执行相应的操作。

[hapi-authorization](https://github.com/toymachiner62/hapi-authorization)

### rbac

rbac 是把用户按角色进行归类，通过用户的角色来确定用户能否针对某项资源进行某项操作。  rbac 相对于 acl 最大的优势就是它简化了用户与权限的管理，通过对用户进行分类，使得角色与权限关联起来，而用户与权限变成了间接关联。  rbac 模型使得访问控制，特别是对用户的授权管理变得非常简单和易于维护，因此有广泛的应用。

[hapi-rbac](https://github.com/franciscogouveia/hapi-rbac)  
 [API](https://github.com/franciscogouveia/hapi-rbac/blob/master/API.md)

## More

[lab](https://github.com/hapijs/lab) - Node test utility.  
 [blipp](https://github.com/danielb2/blipp) - Simple hapi plugin to display the routes table at startup.

[https://hapipal.com/](https://hapipal.com/)
