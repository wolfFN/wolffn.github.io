---
id: type-operation
title: 类型操作
sidebar_label: 类型操作
---

## IDL

Interface Description Language，接口描述性语言，常见的有 protobuf，thift 等。

## 类型提取

参考下列代码：

```typescript
type shiftArr<arr extends unknown[]> = arr extends [unknown, ...infer restArr]
  ? restArr
  : never;

type footArr = shiftArr<[1, 2, 3]>;
```

执行后， footArr 类型为 [2, 3]。  
其中：

- type 可以用来定义类型。
- infer 作用是完成类型推导，只能用于 extends 右侧。

## 映射类型

通过定义 MapType 作为映射类型，可以将一系列对象转化为需要的类型

```typescript
type MapType<T> = {
  [key in keyof T]: [T[key], T[key], T[key]];
};

type res = MapType<{ a: 1; b: 2 }>;
// type res = {a: [1, 1, 1], b: [2, 2, 2]}
```

## 获取某个函数的所有参数类型

```typescript
type getFuncParams<func extends Function> = func extends (
  ...params: infer params
) => unknown
  ? params
  : never;
```

## 递归处理：深度转化为 readonly

```typescript
type deepTransformToReadOnly<T extends object> = T extends any
  ? {
      readonly [key in keyof T]: T[key] extends object
        ? deepTransformToReadOnly<T[key]>
        : T[key];
    }
  : never;
```

## 移除可选修饰符

`-` 用以移除操作

```typescript
type removeOptional<T extends object> = {
  [key in keyof T]-?: T[key];
};
```


