import React from 'react'
import Home from './Pages/Home'
import BsState from './Context/BsState'

export const App = () => {
  return (
    <div>
      <BsState>
      <Home/>
      </BsState>
      
    </div>
  )
}
