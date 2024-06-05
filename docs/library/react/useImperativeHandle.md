---
title: useImperativeHandle
tags: [react]
---

useImperativeHandle 用以自定义 ref 暴露的句柄(handle)。  
然而， handler 中也可以没有 ref。这样，react 中长期缺少的一个事件传递方向：父组件调用子组件函数，便可以由其实现。

父组件, App.tsx

```typescript
import { useRef } from 'react';
import Test, { TestHandle } from './components/Test';

// import './App.css';

const App = () => {
  const testRef = useRef<TestHandle>(null);

  function handleClick() {
    testRef.current?.logInfo();
  }
  return (
    <>
      <button onClick={handleClick}>log</button>
      <Test ref={testRef} />
    </>
  );
};

export default App;
```

子组件, Test.tsx

```typescript
import { forwardRef, useImperativeHandle } from 'react';

export interface TestHandle {
  logInfo: () => void;
}

interface TestProps {}

const Test = forwardRef<TestHandle, TestProps>((props, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      logInfo() {
        console.log(' --------- msg from Test comp --------');
      },
    }),
    [],
  );

  return <p>Test Comp</p>;
});

export default Test;
```

## Ref

https://react.dev/reference/react/useImperativeHandle
