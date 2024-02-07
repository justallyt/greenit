import { Link } from "react-router-dom"
import { MdArrowRightAlt } from "react-icons/md";
import { themes } from "../../data/thematic";
const ServicesSection2 = () => {
  return (
    <div className="services-section">
               <div className="inner-row">
                         <div className="services-section-content">
                                      <div className="services-intro">
                                                    <div className="services-column">
                                                            <div className="title-tag">
                                                                      <span></span>
                                                                     <h3>What We Do</h3>
                                                             </div>
                                                             <h1>Thematic Areas</h1>
                                                    </div>
                                                    <div className="services-column">
                                                              <p>Our organization is active and spread across the country using research, advocacy, impact investment, and assessment of emerging technologies to spearhead environmental sustainability and climate impacts.</p>
                                                    </div>
                                        </div>

                                        <div className="services-content-row">
                                                    { themes.map(item =>
                                                            <div className="service-theme-moja" key={item.id}>
                                                                     <h2>{item.title}</h2>
                                                                     <Link to={'/what-we-do/'}>Explore <span><MdArrowRightAlt /></span></Link>
                                                            </div>
                                                     )}
                                        </div>
                         </div>
               </div>
    </div>
  )
}

export default ServicesSection2