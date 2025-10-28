import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BuyCredit } from './pages/BuyCredit'
import { Home } from './pages/Home'
import { Result } from './pages/Result'

export const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredit/>} />
      </Routes>

    </div>
  )
}
