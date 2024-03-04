import React from 'react'
import './index.scss'

export default function Busca({cidade, setCidade, buscarClima}) {
  return (
    <div>
      <input 
      type="text"
      placeholder='Digite uma cidade..'
      value={cidade}
      onChange={(e) => {
        setCidade(e.target.value)
      }}
       />
      <button onClick={buscarClima} >Pesquisar</button>
    </div>
  )
}
