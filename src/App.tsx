// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Price } from './pages/price'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path= '/about' element= {<About/>} />
      <Route path= '/contact' element= {<Contact/>} />
      <Route path= '/' element= {<Home/>} />
      <Route path= '/price' element= {<Price/>} />
    </Routes>
  )
}

export default App
