import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Programs from './pages/Programs'
function App() {

  return (
    <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/who-we-are/' element={<About />} />
                <Route path='/what-we-do/' element={<Programs />} />
    </Routes>
  )
}

export default App
