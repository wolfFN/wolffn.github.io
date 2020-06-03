---
title: Patterns
---

一些 Best Practice.
[React Patterns](https://reactpatterns.com/)

## Render Props Pattern

Also called  **children as a function** or **child as a function.**

> It is used to expose internal data from within a render prop component for making it accessible to other components within the render prop component's composition.<br />

```javascript
import React, { Component } from 'react';

const App = () => (
    <Amount>
        {amount => (
            <div>
                <Pound amount={amount} />
                <Euro amount={amount} />
            </div>
        )}
    </Amount>
);

class Amount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
        };
    }

    onIncrement = () => {
        this.setState(state => ({ amount: state.amount + 1 }));
    };

    onDecrement = () => {
        this.setState(state => ({ amount: state.amount - 1 }));
    };

    render() {
        return (
            <div>
                <span>US Dollar: {this.state.amount} </span>

                <button type='button' onClick={this.onIncrement}>
                    +
                </button>
                <button type='button' onClick={this.onDecrement}>
                    -
                </button>

                {this.props.children(this.state.amount)}
            </div>
        );
    }
}

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default App;
```
