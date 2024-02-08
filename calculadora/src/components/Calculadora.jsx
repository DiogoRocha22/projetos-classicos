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

    function handleOperation(operation){
        setCompleteOperation(currentValue + " " + operation + " ")
        setPendingOperation(operation)
        setPendingValue(currentValue)
        setCurrentValue("0")
    }

    function Clear(){
        setCompleteOperation('')
        setCurrentValue("0")
        setPendingOperation(null)
        setPendingValue(null)
    }

    function handleOperate(){

        if(!pendindOperation || !pendingValue){
            return;
        }


        let num1 = parseFloat(pendingValue)
        let num2 = parseFloat(currentValue)

        let result

        if(pendindOperation == '+'){
            result = num1 + num2
        }else if (pendindOperation == '-'){
            result = num1 - num2
        }else if (pendindOperation == '*'){
            result = num1 * num2
        }else if (pendindOperation == '/'){
            if (num2 != 0){
                result = num1 / num2
            }else{
                result = 'error'
                setCompleteOperation(result)
                setPendingOperation(null)
                setCurrentValue(result)
                setPendingValue(null)
                return;
            }
        }

        setCompleteOperation(
        pendingValue + 
        " " +
        pendindOperation +
        " " +
        currentValue + 
        " " +
        "=" +
        " " +  
        result
        )
        
        setCurrentValue(result.toString())
        setCompleteOperation("0")
        setPendingOperation(null)
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
                    <button onClick={() => handleOperation(op)} key={op}>{op}</button>
                ))}
                <button onClick={() => handleOperate()}>=</button>

            </div>
        </div>
    )
}
