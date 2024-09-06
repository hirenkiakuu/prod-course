import { useState } from "react";
import * as classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button className={classes.btn} onClick={() => setCount(prev => prev + 1)}>increment</button>
        </div>
    )
};

export default Counter;