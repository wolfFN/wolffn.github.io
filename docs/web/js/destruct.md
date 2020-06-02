---
title: 解构赋值
---

解构赋值(destructuring assignment)常被函数用来解析传入的参数，React 中经常应用。

```javascript
const person = {
    name: 'Theo',
    age: 24,
};
function introduce({ name, age }) {
    console.log(`I'm ${name}, and I'm ${age} years old!`);
}
introduce(person);
// I'm Theo, and I'm 24 years old!
```
