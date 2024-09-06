import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div>
      <Nav/>
      <Routes>
          <Route path='/view'element={<View/>}/>
        <Route path='/Add'element={<Add />} />
        </Routes>
      </div>

  )
}

export default App
