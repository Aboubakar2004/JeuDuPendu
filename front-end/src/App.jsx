import { useState } from 'react'
import Data from './components/Data'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='data' element={<Data/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
