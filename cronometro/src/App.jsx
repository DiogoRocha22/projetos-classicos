
import './App.scss'
import Cronometro from './components/Cronometro/Cronometro'
import Controls from './components/Controls/Controls'
import { useEffect, useState } from 'react'

function App() {

  const [millsecond, setMillsecond] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  

  function formatTime(){
    let minutes = ('0' + (Math.floor(millsecond / 60000) % 60)).slice(-2)
    let seconds = ('0' + (Math.floor(millsecond / 1000) % 60)).slice(-2)
    let centseconds = ('0' + (Math.floor(millsecond / 10) % 100)).slice(-2)

    return `${minutes}:${seconds}:${centseconds}`;

  }

  function startTimer(){
    return setInterval(() => {
      setMillsecond((prevSecond) => prevSecond + 10)
    },10)
  }

  function stopTimer(interval){
    clearInterval(interval)
  }

  function timeClear(){
    setMillsecond(0)
    setTimerOn(false)
  }

  useEffect(() => {
    let interval = null

    if(timerOn){
      interval = startTimer(interval)
    }else{
      interval = stopTimer(interval)
    }

    return () => stopTimer(interval)
  },[timerOn])

  
  return (
    <div className='app'>
      <h1>Cronometro React</h1>

      <div>
        <Cronometro timer={formatTime()}/>

        <Controls
        start={() => setTimerOn(true)} 
        stop={() => setTimerOn(false)}
        clear={() => timeClear()}
        timerOn={timerOn}
        />
      </div>

    </div>
  )
}

export default App
