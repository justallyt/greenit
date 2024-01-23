import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Articles from './pages/Articles'
import SingleArticle from './pages/SingleArticle'

function App() {
  return (
    <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/who-we-are/' element={<About />} />
                <Route path='/what-we-do/' element={<Programs />} />
                <Route path="/articles/" element={<Articles />} />
                <Route path='/article/:name' element={<SingleArticle />} />
                <Route path='/contact-us/' element={<Contact />} />
    </Routes>
  )
}

export default App
