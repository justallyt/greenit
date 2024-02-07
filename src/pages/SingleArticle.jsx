import SingleArticleBody from "../components/articlespage/SingleArticleBody"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import { useParams} from 'react-router-dom'

const SingleArticle = () => {
  const { name } = useParams();
  const articleData = localStorage.getItem('Articles') ? JSON.parse( localStorage.getItem("Articles")) : []
  
  const articleBody = articleData.find(item => item.slug === name);

  return (
    <>
           <Navbar />
           <SingleArticleBody data={articleBody} />
           <Footer />
    </>
  )
}

export default SingleArticle