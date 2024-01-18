import article1 from "../../assets/climate-change.jpg"
import article2 from "../../assets/service3.jpg"
import article3 from '../../assets/service4.jpg'
const Articles = () => {
  return (
    <div className="articles-section">
              <div className="inner-row">
                         <div className="articles-section-content">
                                     <div className="articles-intro">
                                                  <h3>Read Our Articles</h3>
                                                  <span></span>
                                     </div>
                                     <div className="articles-row">
                                                 <div className="article-moja">
                                                            <div className="article-image">
                                                                  <img src={article1} alt="" />
                                                            </div>
                                                            <h4>Is Climate Change happening faster than expected?</h4>
                                                            <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Susee varius enim lori hlome disect me trul ymeyke anyik dodslmo dilir krist mondi...</p>
                                                 </div>
                                                 <div className="article-moja">
                                                            <div className="article-image">
                                                                  <img src={article2} alt="" />
                                                            </div>
                                                            <h4>How Volunteers changed the face of Lusaka.</h4>
                                                            <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Susee varius enim lori hlome disect me trul ymeyke anyik dodslmo dilir krist mondi...</p>
                                                 </div>
                                                 <div className="article-moja">
                                                            <div className="article-image">
                                                                  <img src={article3} alt="" />
                                                            </div>
                                                            <h4>The Young Generation Purpose for Our Environment.</h4>
                                                            <p>Lorem ipsum dolor sit amet, consecter adipiscing elit. Susee varius enim lori hlome disect me trul ymeyke anyik dodslmo dilir krist mondi...</p>
                                                 </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default Articles