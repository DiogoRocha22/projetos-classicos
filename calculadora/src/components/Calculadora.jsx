import React from 'react'
import './index.scss'

export default function Calculadora() {
    
    const operations = ['+', '-', '/', '*']
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    return (
        <div className='calculator'>
            <div className="complete-operation">3 + 3 = 6</div>
            <div className="display">6</div>
            
            <div className="buttons">
                <button>AC</button>
                {numbers.map((num) => (
                    <button key={num}>{num}</button>
                ))}
                {operations.map((op) => (
                    <button key={op}>{op}</button>
                ))}
                <button>=</button>

            </div>
        </div>
    )
}
