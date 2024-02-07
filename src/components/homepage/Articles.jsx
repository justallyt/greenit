import { useNavigate, Link } from 'react-router-dom'
import { FiExternalLink } from "react-icons/fi";

const Articles = () => {
      const navigate = useNavigate();
      const articles = localStorage.getItem("Articles") ? JSON.parse(localStorage.getItem("Articles")) : []
  return (
    <div className="articles-section">
              <div className="inner-row">
                         <div className="articles-section-content">
                                     <div className="articles-intro">
                                                  <h3>Read Our Articles</h3>
                                                  <span></span>
                                     </div>
                                     <div className="articles-row">
                                                 { articles && articles.length > 0 ?
                                                        articles.slice(0,3).map(item =>
                                                            <div className="article-moja" key={item.id} onClick={()=> navigate(`/article/${item.slug}`)}>
                                                                      <div className="article-image">
                                                                            <img src={item.articleImage.url} alt="" />
                                                                      </div>
                                                                      <h4>{item.blogTitle}</h4>
                                                                      <p>{item.articleBody.html.slice(3,110)}...</p>
                                                                      <Link to={`/article/${item.slug}`}>Read Article <span><FiExternalLink /></span></Link>
                                                           </div>
                                                         )
                                                   :
                                                     <p>Apologies! No Articles to show at the moment.</p>
                                                }
                                                 
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default Articles