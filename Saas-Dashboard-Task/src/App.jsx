import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Dashboard/Main'

function App() {

  return (
    <div className='dashboard'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
