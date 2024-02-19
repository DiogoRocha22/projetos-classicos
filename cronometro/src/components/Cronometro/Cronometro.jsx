import React from 'react'
import './index.scss'

export default function Cronometro({timer}) {
  return (
    <div className='cronometro'>
        <h1>{timer}</h1>
    </div>
  )
}
