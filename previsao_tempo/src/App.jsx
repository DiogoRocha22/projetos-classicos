import axios from 'axios'
import { useState, useEffect } from 'react'

import Busca from './components/Busca/Busca'
import ClimaAtual from './components/ClimaAtua/ClimaAtual'
import Previsao from './components/Previsao/Previsao'


import { Titulo } from './AppStyles'


function App() {

  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY || ""

  const BuscarClima = async () => {
    try{
      const climaResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
      )
      setClima(climaResponse.data)
    }catch(error){
      console.log("Erro ao buscar Clima", error)
    }
    console.log(clima)
  }

  

  return (
    <div>
      <Titulo>Previsão do Tempo</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={BuscarClima} />
      <ClimaAtual/>
      <Previsao/>
    </div>
  )
}

export default App
