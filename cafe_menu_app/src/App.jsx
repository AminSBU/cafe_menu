import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header_first from './header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header_first/>
    </>
  )
}

export default App
