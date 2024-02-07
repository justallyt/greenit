import { Link } from "react-router-dom"
import { FiExternalLink } from "react-icons/fi";

const ArticlesBody = () => {
  const articles = localStorage.getItem("Articles") ? JSON.parse(localStorage.getItem("Articles")) : []
  const sanitized  = articles.slice(1);
  return (
    <div className="articles-body-section">
             <div className="inner-row">
                        { articles.length > 1 ? 
                              <div className="articles-body-content">
                                          <h3>Other Articles</h3>
                                          <div className="articles-body-row">
                                                      {sanitized.map(item => 
                                                           <div className="single-article-moja" key={item.id}>
                                                               <img src={item.articleImage.url} alt="" />
                                                                {/* <h4>4<sup>th</sup> October, 2023</h4> */}
                                                                 <h4>{item.date}</h4>
                                                                <h2>{item.blogTitle}</h2>
                                                                <p>{articles[0].articleBody.html.slice(3,120)}...</p>
                                                                <Link to={`/article/${item.slug}`}>Read Article <span><FiExternalLink /></span></Link>
                                                         </div>
                                                        )}
                                          </div>
                              </div>
                          :
                             ''
                          }
             </div>
    </div>
  )
}

export default ArticlesBody