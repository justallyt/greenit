import porfolio1 from "../../assets/planter.jpg"
import portfolio2 from "../../assets/sgc.jpg"
import portfolio3 from '../../assets/envday.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio-section">
               <div className="inner-row">
                          <div className="portfolio-section-content">
                                      <div className="portfolio-intro">
                                                 <div className="title-tag">
                                                              <span></span>
                                                              <h3>The Projects We Have Done</h3>
                                                 </div>
                                                 <h1>We are Creating A Sustainable Society for Everyone</h1>
                                      </div>

                                      <div className="portfolio-row">
                                                   <div className="portfolio-moja">
                                                             <div className="overlay"></div>
                                                             <img src={porfolio1} alt="" />
                                                             <div className="portfolio-text">
                                                                       <h3>2023 National Tree Planting Exercise</h3>
                                                             </div>
                                                   </div>
                                                   <div className="portfolio-moja">
                                                             <div className="overlay"></div>
                                                             <img src={portfolio2} alt="" />
                                                             <div className="portfolio-text">
                                                                       <h3>School Green Clubs</h3>
                                                             </div>
                                                   </div>
                                                   <div className="portfolio-moja">
                                                             <div className="overlay"></div>
                                                             <img src={portfolio3} alt="" />
                                                             <div className="portfolio-text">
                                                                       <h3>World Environment Day</h3>
                                                             </div>
                                                   </div>
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default Portfolio