import ArticlesBody from "../components/articlespage/ArticlesBody"
import ArticlesHero from "../components/articlespage/ArticlesHero"
import Navbar from "../components/common/navigation/Navbar"
import "../css/articles.css"
import Footer from "../components/common/Footer"
const Articles = () => {
  return (
    <>
            <Navbar />
            <ArticlesHero />
            <ArticlesBody />
            <Footer />
    </>
  )
}

export default Articles