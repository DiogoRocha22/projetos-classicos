import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Converter.scss'

export default function Converter() {
    const [valueToConvert, setValueToConvert] = useState("")
    const [convertFrom, setConvertFrom] = useState("BRL")
    const [convertTo, setConvertTo] = useState("USD")
    const [convertedValue, setConvertedValue] = useState(25)
    const [rates, setRates] = useState("")

    useEffect(() => {
        
        axios.get(
            "https://v6.exchangerate-api.com/v6/a0ae0ae026929a41ba678966/latest/USD"
        ).then((response) => {
            setRates(response.data.conversion_rates)
        }).catch((error) => {
            console.log("Ocorreu um erro" + error)
        })}
    , [])

    useEffect(() => {
        if(rates){
            let ratesFrom = rates[convertFrom] || 0
            let ratesTo = rates[convertTo] || 0

            setConvertedValue(((valueToConvert / ratesFrom) * ratesTo).toFixed(2))
        }
    },[valueToConvert, rates, convertTo, convertFrom])

    if(!rates)(
        <h1>Carregando...</h1>
    )
  
    return (
    <div className='converter'>
        <h2>Conversor de moedas</h2>
        <div className='converter__number'>
            <label htmlFor="">Insira o valor a ser convertido</label>
            <input type="number" onChange={(e) => {
                setValueToConvert(e.target.value)
            }} value={valueToConvert} placeholder='R$5.00' />
        </div>
        <p>Selecione as Moedas:</p>
        <select value={convertFrom} onChange={(e) => {
            setConvertFrom(e.target.value)
        }}>
            {Object.keys(rates).map((currency) => (
               <option key={currency} value={currency}>{currency}</option> 
            ))}
        </select>
        <p>para</p>
        <select value={convertTo} onChange={(e) => {
            setConvertTo(e.target.value)
        }}>
            {Object.keys(rates).map((currency) => (
               <option key={currency} value={currency}>{currency}</option> 
            ))}
        </select>
        <h3>{convertFrom} para {convertTo}</h3>
        
        {valueToConvert > 0 && <p>{valueToConvert} {convertFrom} valem {convertedValue} {convertTo}</p>}
        
    </div>
  )
}
