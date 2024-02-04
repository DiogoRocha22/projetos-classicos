import React, { useState } from 'react'
import './index.scss'

export default function Calculadora() {
    
    const [currentValue, setCurrentValue] = useState('0')
    const [pendingValue, setPendingValue] = useState(null)
    const [pendindOperation, setPendingOperation] = useState(null)
    const [completeOperation, setCompleteOperation] = useState('')


    const operations = ['+', '-', '/', '*']
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0']

    function handleClick(val){
        setCurrentValue((prevValue) => {
            if(prevValue == '0'){
                return val
            }
            return prevValue + val
        })
        setCompleteOperation((prevOperation)=> {
            if(prevOperation == ''){
                if(val == 0){
                    return ''
                }else{
                    return prevOperation + val
                }
            }
            return prevOperation + val
        })
    }

    function Clear(){
        setCompleteOperation('')
        setCurrentValue("0")
        setPendingOperation(null)
        setPendingValue(null)
    }

    return (
        <div className='calculator'>
            <div className="complete-operation">{completeOperation}</div>
            <div className="display">{currentValue}</div>
            
            <div className="buttons">
                <button onClick={() => Clear()}>AC</button>
                {numbers.map((num) => (
                    <button onClick={() => handleClick(num)} key={num}>{num}</button>
                ))}
                {operations.map((op) => (
                    <button key={op}>{op}</button>
                ))}
                <button>=</button>

            </div>
        </div>
    )
}
