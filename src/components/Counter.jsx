
import { useState } from 'react'
import React from "react";
import './counter.css'
export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className='usage'>
            <div className='usage-item'>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setCount(count + 1)}>
                    Incriment
                </button>
                <label htmlFor="">{count}</label>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setCount(count - 1)}>
                    Decrement
                </button>
            </div>
        </div>
    )
}
