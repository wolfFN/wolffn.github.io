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
执行一些代码进行运行时检查，尝试检测属性、方法或原型，进而确定如何处理值。  
```
in
typeof
instanceof
```

## 联合类型
``` typescript
const sayHello = (name: string | undefined) => {
    /* ... */
};
let num: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'mousemove';
```

### 可辨识联合(Discriminated Unions)
// todo

### 类型别名
``` typescript
type Message = string | string[];
```

## 交叉类型
通过 `&` 运算符将多种类型叠加到一起，形成一个新的类型。若两个类型有相同成员，切为基础类型，比如 number & string， 合成后其类型never。若为复合类型，则会继续进行合并。
``` typescript
type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };

const point: Point = {
    x: 1,
    y: 1,
};
```

## 函数
可选参数，用 `?` 表示；默认参数用 `=` 赋值。
``` typescript
// 可选参数
function createUserId(name = 'Theo', id: number, age?: number): string {
    return name + id;
}
```
相比于 JS，TS 由于类型系统的存在，可以实现函数重载。既可以实现普通函数重载，也可以实现类中成员方法的重载。  
TS 编译器处理函数时，会找到重载列表，然后从签到后尝试使用。所以在定义重载函数时，应该将最精确的定义放到最前面。  
参数类型不同、参数个数不同、或参数先后顺序不同都会造成重载。

## 接口
TS 中接口是一个相对灵活的概念，除了可用于对类的一部分进行抽象，还可用以描述对象的形状（Shape）。
``` typescript
interface Person {
    name: string;
    // 只读
    readonly age: number;
    // 可选
    sex?: string;
    // 创建后无法再被修改
    job: ReadonlyArray<string>;
    // 索引签名，用以实现任意属性
    [propName: string]: any;
}
```

### Interface vs Type
Interface 和 Type 都可以用来描述对象的形状或函数签名。区别如下
1. Type 可以用于一些其他类型，比如原始类型、联合类型和元祖。
2. 扩展操作(type 是否可以扩展 interface ?)
   ``` typescript
    interface PartialPointX {
        x: number;
    }
    interface Point extends PartialPointX {
        y: number;
    }

    type PartialPointX = { x: number };
    type Point = PartialPointX & { y: number };

    type PartialPointX = { x: number };
    interface Point extends PartialPointX {
        y: number;
    }

    interface PartialPointX {
        x: number;
    }
    type Point = PartialPointX & { y: number };
   ```
3. Class 可以用相同方式实现 Interface 和 Type，但不能实现 Type 定义的联合类型。
4. 接口可以定义多次，会自动合并。
   ``` typescript
    interface Point { x: number; }
    interface Point { y: number; }

    const point: Point = { x: 1, y: 2 };
   ```
## Class
static 静态属性，方法  
\# 私有字段  
extends 继承  
abstract 抽象  
访问器
``` typescript
let passCode = 'Hello TypeScript';

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passCode && passCode == 'Hello TypeScript') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized update of employee!');
        }
    }
}

let employee = new Employee();
employee.fullName = 'XXX YYY';
if (employee.fullName) {
    console.log(employee.fullName);
}
```

## 泛型 Generics
泛型是允许同一个函数接收不同类型参数的一种模板。创建针对不同类型可复用的组件/函数时，泛型相比于 any 的优点在于可以保留参数类型。  
``` typescript
function identity<T>(value: T): T {
    return value;
}

function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}

console.log(identity<Number, string>(68, 'MSG'));
```

在上述代码中，`<T>` 内部的 `T` 被称为类型变量，用作类型占位符，被分配 value 参数以及函数返回值，作为其类型。  
`T` 代表 Type，在定义泛型时通常用作第一个类型变量的名称。可以用任何有效名称代替。常用泛型变量代表如下：
* K（Key）：表示对象中的键类型；
* V（Value）：表示对象中的值类型；
* E（Element）：表示元素类型。


``` typescript
// 泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

```

### 泛型工具
`typeof` 操作符可以用来获取一个变量声明或对象的类型。  
`Partial<T>` 可以将某个类型里的属性全部变为可选项 ?。  



`keyof` 可以用于获取某种类型的所有键，其返回类型是联合类型。  
``` typescript
interface Person {
    name: string;
    age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: Person }; // string | number
```

`in` 用来遍历枚举类型：
``` typescript
type Keys = 'a' | 'b' | 'c';

type Obj = {
    [p in Keys]: any;
}; // -> { a: any, b: any, c: any }
```

`infer` 声明一个类型变量并且对它进行使用。 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。
``` typescript
type SomeType<T> = T extends (...args: any[]) => infer R ? R : any;
```

`extends` 可以对泛型进行某些约束
``` typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
```

## 装饰器
* 装饰器是一个表达式。  
* 被执行后，返回一个函数。函数的入参分别为 target, name, descriptor。  
* 执行该函数后，可能返回 descriptor 对象，用以配置 target 对象。  

### 类装饰器
只接收一个参数
* target: TFunction - 被装饰的类
``` typescript
function Greeter(greeting: string) {
    return function (target: Function) {
        target.prototype.greet = function (): void {
            console.log(greeting);
        };
    };
}

// 若不需要参数，此处可以直接 @Greeter
@Greeter('Hello TS!')
class Greeting {
    constructor() {
        // 内部实现
    }
}

let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: 'Hello TS!';
```

### 属性装饰器
接收两个参数
* target: Object - 被装饰的类
* propertyKey: string | symbol - 被装饰类的属性名
``` typescript
function logProperty(target: any, key: string) {
    delete target[key];

    const backingField = '_' + key;

    Object.defineProperty(target, backingField, {
        writable: true,
        enumerable: true,
        configurable: true,
    });

    // property getter
    const getter = function (this: any) {
        const curVal = this[backingField];
        console.log(`Get: ${key} => ${curVal}`);
        return curVal;
    };

    // property setter
    const setter = function (this: any, newVal: any) {
        console.log(`Set: ${key} => ${newVal}`);
        this[backingField] = newVal;
    };

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}

class Person {
    @logProperty
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p1 = new Person('Hello');
p1.name = 'World';
```

### 方法装饰器
接收三个参数：
* target: Object - 被装饰的类
* propertyKey: string | symbol - 方法名
* descriptor: TypePropertyDescript - 属性描述符
``` typescript
function log(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log('wrapped function: before invoking ' + propertyKey);
        let result = originalMethod.apply(this, args);
        console.log('wrapped function: after invoking ' + propertyKey);
        return result;
    };
}

class Task {
    @log
    runTask(arg: any): any {
        console.log('runTask invoked, args: ' + arg);
        return 'finished';
    }
}

let task = new Task();
let result = task.runTask('learn ts');
console.log('result: ' + result);

```

### 参数装饰器
接收三个参数
* target: Object - 被装饰的类
* propertyKey: string | symbol - 方法名
* parameterIndex: number - 方法中参数的索引值
``` typescript
function Log(target: Function, key: string, parameterIndex: number) {
    let functionLogged = key || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
      been decorated`);
}

class Greeter {
    greeting: string;
    constructor(@Log phrase: string) {
        this.greeting = phrase;
    }
}
```

## New Feature
### 构造函数的类属性推断
当 noImplicitAny 配置属性被启用之后，TypeScript 4.0 就可以使用控制流分析来确认类中的属性类型：
``` typescript
class Person {
    fullName; // (property) Person.fullName: string
    firstName; // (property) Person.firstName: string | undefined
    lastName; // (property) Person.lastName: string | undefined

    constructor(fullName: string) {
        this.fullName = fullName;
        if (Math.random()) {
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
}
```

### 标记的元组元素
我们使用元组类型来声明剩余参数的类型：
``` typescript
function addPerson(...args: [string, number]): void {
    console.log(`Person info: name: ${args[0]}, age: ${args[1]}`);
}

addPerson('lolo', 5); // Person info: name: lolo, age: 5

// 显式设置变量名
function addPerson(name: string, age: number) {
  console.log(`Person info: name: ${name}, age: ${age}`)
}
```


相比于显式变量名，虽然这样对类型检查没有影响，但在元组位置上缺少标签，会使得它们难于使用。为了提高开发者使用元组的体验，TypeScript 4.0 支持为元组类型设置标签
``` typescript
function addPerson(...args: [name: string, age: number]): void {
    console.log(`Person info: name: ${args[0]}, age: ${args[1]}`);
}
```

# Reference
* [一份不可多得的 TS 学习指南](https://segmentfault.com/a/1190000024458956)