import { Link, useNavigate } from "react-router-dom";
import article1 from "../../assets/article1.jpg"
import { FiExternalLink } from "react-icons/fi";
const ArticlesHero = () => {
  const navigate = useNavigate();
  return (
    <div className="articles-hero-section">
               <div className="inner-row">
                          <div className="articles-hero-section-content">
                                     <div className="intro">
                                              <h1>Greenit Environmental Management Network Articles</h1>
                                     </div>

                                     <div className="article-first-wrapper" onClick={() => navigate('/article/the-business-of-climate-change-in-africa')}>
                                                <div className="article-image">
                                                            <img src={article1} alt="" />
                                                </div>
                                                <div className="article-description">
                                                            <div className="article-description-inner">
                                                                       <div className="date">
                                                                                   <h3>23<sup>rd</sup> September, 2023</h3>
                                                                       </div>
                                                                        <h1>The Business of Climate Change in Africa</h1>
                                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque fugiat amet quos laudantium voluptatem dignissimos cum aliquam tenetur ipsam eius natus, officiis sequi. Esse voluptate quibusdam quo laudantium, debitis nam reprehenderit officiis placeat similique...</p>
                                                                        <Link to={'/article/the-business-of-climate-change-in-africa'}>Read Article <span><FiExternalLink /></span></Link>
                                                            </div>
                                                </div>
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default ArticlesHero