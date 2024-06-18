import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import './App.css'
const App = () => {
  return (
    <div>
     <Header /> 

     <main className='main'>
      <Home/>
     </main>
    </div>
  )
}

export default App
