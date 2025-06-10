import Data from './components/Data'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='data' element={<Data/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
