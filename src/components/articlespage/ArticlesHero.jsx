import { Link, useNavigate } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
const ArticlesHero = () => {
  const navigate = useNavigate();
  const articles = localStorage.getItem("Articles") ? JSON.parse(localStorage.getItem("Articles")) : []
  console.log(articles);

  return (
    <div className="articles-hero-section">
               <div className="inner-row">
                          <div className="articles-hero-section-content">
                                     <div className="intro">
                                              <h1>Greenit Environmental Management Network Articles</h1>
                                     </div>

                                     <div className="article-first-wrapper" onClick={() => navigate(`/article/${articles[0].slug}`)}>
                                                <div className="article-image">
                                                            <img src={articles[0].articleImage.url} alt="" />
                                                </div>
                                                <div className="article-description">
                                                            <div className="article-description-inner">
                                                                       <div className="date">
                                                                                   <h3>23<sup>rd</sup> September, 2023</h3>
                                                                       </div>
                                                                        <h1>{articles[0].blogTitle}</h1>
                                                                        <p>{articles[0].articleBody.html.slice(3,180)}...</p>
                                                                        <Link to={`/article/${articles[0].slug}`}>Read Article <span><FiExternalLink /></span></Link>
                                                            </div>
                                                </div>
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default ArticlesHero