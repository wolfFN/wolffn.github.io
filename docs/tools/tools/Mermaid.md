---
title: Mermaid
---
## Ref
* [官网](https://mermaid-js.github.io/mermaid/#/)  
* [live editor](https://mermaid-js.github.io/mermaid-live-editor/)

## 流程图

### 节点
``` mermaid
flowchart LR
    id
```

### 包含文本的节点
``` mermaid
flowchart LR
    id1[This is the text in the box]
```

### 图
* 从上到下 `TDTB`
``` mermaid
flowchart TD 
    Start --> Stop
```
* 从左到右 `LR`
``` mermaid
flowchart LR 
    Start --> Stop
```

全部方向：
  - TB - 从上到下
  - TD - 自上而下/从上到下相同
  - BT - 从下到上
  - RL - 从右到左
  - LR - 从左到右

### 节点形状
* 圆边 `id1(This is the text in the box)`
* 运动场形状 `id1([This is the text in the box])`
* 子例程 `id1[[This is the text in the box]]`
* 圆柱形 `id1[(Database)]`
* 圆形 `id1((This is the text in the circle))`
* 菱形 `id1{This is the text in the box}`
* 六边形 `id1{{test}}`
* 平行四边形 `id1[/feishu/]`, `id1[\feishu\]`
* 梯形 `A[/feishu\]`, `A[\feishu/]`

### 节点间的连接
* 带箭头的连接 `A-->B`
* 开放式连接 `A --- B`
* 带文字的连接 `A -- 文字 --- B`
* 带文字和箭头 `A-->|文字|B`
* 虚线 `A-.->B`
* 带文字虚线 `A-. 文字 .-> B`
* 加粗 `A ==> B`
* 带文字加粗 `A == 文字 ==> B`
* 连续 `A -- 文字 --> B -- 文字 --> C`
* 多个节点连接 `a --> b & c--> d`
* 依赖关系 `A & B--> C & D`

### 流程图示例
* 多个破折号,表示比其他线条长
```mermaid
flowchart TD 
    A[开始] --> B{判断?};
    B -->|Yes| C[OK];
    C --> D[重新想想];
    D --> B;
    B ---->|No| E[结束];
```

* 多子图
```mermaid
flowchart TB
 c1-->a2 
  subgraph one 
 a1-->a2 
  end 
  subgraph two
 b1-->b2 
  end 
  subgraph three 
 c1-->c2 
  end 
 one --> two 
 three --> two 
 two --> c2
```



## 时序图
* 实线箭头 `->>`
* 虚线箭头 `-->>`
* 参与方 `participant Alice`
* 参与人 `actor Alice`
* 简写 `participant A as Alice`

``` mermaid
sequenceDiagram
  John->>Alice: How are you?
  activate Alice
  Alice-->>John: Great!
  deactivate Alice
```

### 创建和销毁 (v10.3.0+)
``` mermaid-unsupported 
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you ?
    Bob->>Alice: Fine, thank you. And you?
    create participant Carl
    Alice->>Carl: Hi Carl!
    create actor D as Donald
    Carl->>D: Hi!
    destroy Carl
    Alice-xCarl: We are too many
    destroy Bob
    Bob->>Alice: I agree
```

### Activations
```mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    activate John
    John-->>Alice: Great!
    deactivate John
```
简写:
```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    John-->>-Alice: Great!
```

### Note
```mermaid
sequenceDiagram
    participant John
    Note right of John: Text in note
```
跨区
```mermaid
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction<br/>But now in two lines
```

### 循环 Loops
```mermaid
sequenceDiagram
    Alice->John: Hello John, how are you?
    loop Every minute
        John-->Alice: Great!
    end
```

### 背景颜色
```mermaid
sequenceDiagram
    participant Alice
    participant John

    rect rgb(191, 223, 255)
    note right of Alice: Alice calls John.
    Alice->>+John: Hello John, how are you?
    rect rgb(200, 150, 255)
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    end
    John-->>-Alice: I feel great!
    end
    Alice ->>+ John: Did you want to go to the game tonight?
    John -->>- Alice: Yeah! See you there.
```
### 注释
```mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    %% this is a comment
    John-->>Alice: Great!
```

### 序号
```mermaid
sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

## UML
``` mermaid
classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal <|-- Elephant
  Animal : +int age
  Animal : +String gender
  Animal: +isMammal()
  Animal: +mate()
  class Duck {
      +String beakColor
      +swim()
      +quack()
  }
  class Fish {
      -int sizeInFeet
      -canEat()
  }
  class Elephant {
      +bool is_wild
      +run()
  }
```
## 甘特图
``` mermaid
gantt
  title 一个甘特图例子
  dateFormat  YYYY-MM-DD
  section 区域A
  一个任务            :a1, 2022-01-01, 2d
  另一个任务          :after a1  , 1d
  section 区域B
  任务C              :2022-01-04, 3d
  任务D              : 2d
```
## 饼图
``` mermaid
pie title 用户构成
  "优秀的人" : 386
  "特别优秀的人" : 85
  "最优秀的人" : 15
```
