---
id: basic
title: Basic
sidebar_label: Basic
---

## What is TS
TypeScript 是 JavaScript 的一个超集，添加了可选的静态类型和基于类的面向对象编程。  
TypeScript 可以在编译期间发现并纠正错误。并且只会在编译阶段对类型进行静态检查。观察编译后的输出结果，可以发现，类型信息在编译后被擦除了。

## 如何使用
1. 本地编译
   ``` bash
   npm i -g typescript
   tsc -v
   tsc hello.ts
   ```
2. [PlayGround](https://www.typescriptlang.org/play)

## 类型
``` typescript
let isDone: boolean = false;
let count: number = 10;
let nameString: string = 'name string';

let list: number[] = [1, 2, 3];
let stringList: Array<string> = ['a', 'b'];

let sym = Symbol();
let obj = {
    [sym]: 'sym string',
};
```

### Enum
1. 数字枚举：默认情况下，NORTH 初始值为0，其余的成员从 1 开始自动增长。也可以设置初始值，比如 `NORTH = 3`。  
    ``` typescript
    enum Direction {
    NORTH,
    SOUTH,
    EAST,
    WEST,
    }

    let dir: Direction = Direction.NORTH;
    ```
1. 字符串枚举，每个成员都必须用字符串字面量，或者另一个字符串枚举成员进行初始化。
    ``` typescript
    enum Direction {
    NORTH = "NORTH",
    SOUTH = "SOUTH",
    EAST = "EAST",
    WEST = "WEST",
    }
    ```
1. 常量枚举，常量枚举会使用内联语法，不会为枚举类型编译生成任何 JavaScript。
   ``` typescript
   const enum Direction {
     NORTH,
     SOUTH,
     EAST,
     WEST,
   };

   let dir: Direction = Direction.NORTH;

   // 编译后
   "use strict";
   var dir = 0 /* NORTH */;
   ```
1. 异构枚举，成员值是数字和字符串的混合。
   ``` typescript
   enum Enum {
     A,
     B,
     C = "C",
     D = "D",
     E = 8,
     F,
   }
   ```

### Any Unknown
在 TS 中，任何类型都可以被归为 any 类型。所以，any 是类型系统的顶级类型，也被称作全局超级类型。  
any 本质上是类型系统的一个逃逸仓，TS 允许我们对 any 类型执行任何操作而不进行检查。  

unknown 是 TS 中的另一种顶级类型，系统对其进行了一些限制。
* unknown 类型只能被赋予给 any 类型和 unknown 类型本身。
* 相比于 any 类型允许任何更改，unknown 类型禁止任何更改。比如，读取子属性、调用字方法这些，都不被允许。

### Tuple
元组是存储不同类型值的数组。使用时必须提供每个属性的值。
``` javascript
const tupleVar: [string, boolean, number] = ['hello', true, 1];

console.log(tupleVar);
console.log(tupleVar[0]);
console.log(tupleVar[1]);
console.log(tupleVar[2]);
```



### Void Null Undefined
void 表示没有任何类型。当一个函数没有返回值时，将其返回值类型定义为 void。声明一个 void 类型的变量没有什么用，其值只能为 undefined。  
null 和 undefined 在 typescript 中尤其各自的类型，分别为 null 和 undefined。

### object Object {}
object 表示非原始类型，Object 是所有 Object 类实例的类型，{}类型描述了一个没有成员的对象。

### Never
表示那些用不存在的值的类型。比如，以下两种函数，可以用 Never 作为其返回值：总是会抛出异常，或者根本不会有返回值。
此外，可以利用 never 类型的特性来实现全面性检查。如下例，使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
``` typescript
// 若给 Foo 增加更多类型，则能被该函数检测出来。
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo === 'string') {
        // do something here
    } else if (typeof foo === 'number') {
        // do something here
    } else {
        const check: never = foo;
    }
}
```

## Assertion 断言
工程师通过类型断言告诉编辑器，可以确定该变量的具体类型。只在编译阶段起作用，没有运行时的影响。有以下两种形式
``` typescript
let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;

let strLength: number = (someValue as string).length;
```

### 非空断言
后缀表达式操作符 `!` 可以用于断言操作对象是非 null 和非 undefined 类型。换句话说，`x!` 将从 x 值域中排除 null 和 undefined。同样，仅在编译阶段起作用，编译过程将会移除该操作符。
``` typescript
function myFunc(maybeString: string | undefined | null) {
    // Type 'string | null | undefined' is not assignable to type 'string'.
    // Type 'undefined' is not assignable to type 'string'.
    const onlyString: string = maybeString; // Error
    const ignoreUndefinedAndNull: string = maybeString!; // Ok
  }

type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}
```

## 确定赋值断言
`!` 操作符同样可以告知编译器，该变量会被明确地赋值。
``` typescript
let x: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
    x = 10;
}

let x!: number;
initialize();
console.log(2 * x); // Ok

function initialize() {
    x = 10;
}
```


## 类型守卫