import { Link } from "react-router-dom"
import { FiExternalLink } from "react-icons/fi";
import article1 from "../../assets/service4.jpg"
import article2 from "../../assets/service5.jpg"
import article3 from "../../assets/climate-change.jpg"
const ArticlesBody = () => {
  return (
    <div className="articles-body-section">
             <div className="inner-row">
                         <div className="articles-body-content">
                                    <h3>Other Articles</h3>
                                    <div className="articles-body-row">
                                                  <div className="single-article-moja">
                                                               <img src={article1} alt="" />
                                                                <h4>4<sup>th</sup> October, 2023</h4>
                                                                <h2>Towards Sustainability: A look ahead to Environmental Moments in 2024</h2>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum veritatis sit laborum repudiandae laudantium placeat, fuga illum maxime eum...</p>
                                                                <Link to={'/'}>Read Article <span><FiExternalLink /></span></Link>
                                                  </div>
                                                  <div className="single-article-moja">
                                                               <img src={article2} alt="" />
                                                                <h4>6<sup>th</sup> November, 2023</h4>
                                                                <h2>Govt partnership reawakens former stronghold for black rhino in Zambia.</h2>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum veritatis sit laborum repudiandae laudantium placeat, fuga illum maxime eum...</p>
                                                                <Link to={'/'}>Read Article <span><FiExternalLink /></span></Link>
                                                  </div>
                                                  <div className="single-article-moja">
                                                               <img src={article3} alt="" />
                                                                <h4>14<sup>th</sup> December, 2023</h4>
                                                                <h2>&apos;Helicopter science&apos; and imposed conservation models disregard African environmental knowledge</h2>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum veritatis sit laborum repudiandae laudantium placeat, fuga illum maxime eum...</p>
                                                                <Link to={'/'}>Read Article <span><FiExternalLink /></span></Link>
                                                  </div>
                                    </div>
                         </div>
             </div>
    </div>
  )
}

export default ArticlesBody