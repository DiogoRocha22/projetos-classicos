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
  console.log(apiKey)

  return (
    <div>
      <Titulo>Previsão do Tempo</Titulo>
      <Busca/>
      <ClimaAtual/>
      <Previsao/>
    </div>
  )
}

export default App
