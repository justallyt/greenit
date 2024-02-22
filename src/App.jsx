import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route, useLocation } from "react-router-dom"
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Articles from './pages/Articles'
import SingleArticle from './pages/SingleArticle'
import Donate from './pages/Donate'
import { useEffect } from 'react'
function App() {
  const location = useLocation()

  const alwaysOnTopPage = () =>{
       window.scrollTo(0, 0);
  }
  useEffect(()=>{
         alwaysOnTopPage()
  },[location])
  return (
    <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/who-we-are/' element={<About />} />
                <Route path='/what-we-do/' element={<Programs />} />
                <Route path="/articles/" element={<Articles />} />
                <Route path='/article/:name' element={<SingleArticle />} />
                <Route path='/contact-us/' element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
    </Routes>
  )
}

export default App
