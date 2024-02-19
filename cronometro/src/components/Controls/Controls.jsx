import React from 'react'
import './index.scss'

export default function Controls({stop, start, timerOn, clear}) {
  return (
    <div className='controls'>
        {!timerOn && <button onClick={start}>Iniciar</button>}
        {timerOn && <button onClick={stop}>Parar</button>}
        <button onClick={clear}>zerar</button>
    </div>
  )
}
