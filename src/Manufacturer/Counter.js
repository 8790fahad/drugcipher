import React from 'react'
import { useState } from 'react'

export default function Counter() {
    let [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    let [disp, setDisp] = useState(0)
    const displaySave = () => {
        setDisp(disp += count)
        setCount(count = 0)
    }
    return (
        <div>
            <h2>peaople entered</h2>
            <h6>{count}</h6>
            <button onClick={increment}>increment</button>
            <button onClick={displaySave}>save</button>
            <p>{disp}</p>
        </div>
    )
}
