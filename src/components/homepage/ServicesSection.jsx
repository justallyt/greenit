import { LuMoveUpRight } from "react-icons/lu";
import { services } from '../../data/services';
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
const ServicesSection = () => {
  return (
    <div className="services-section">
                <div className="inner-row">
                             <div className="services-section-content">
                                        <div className="services-intro">
                                                    <div className="services-column">
                                                            <div className="title-tag">
                                                                      <span></span>
                                                                     <h3>Who We Do</h3>
                                                             </div>
                                                             <h1>Elevating Environmental Programs & Activities</h1>
                                                    </div>
                                                    <div className="services-column">
                                                              <p>Our organization is active and spread across the country using research, advocacy, impact investment, and assessment of emerging technologies to spearhead environmental sustainability and climate impacts.</p>
                                                    </div>
                                        </div>
                                        <div className="services-content-row">
                                                   { services.map(item => 
                                                    <div className="service-moja" key={item.id}>
                                                             <div className="service-image">
                                                                     <img src={item.image} alt="" />
                                                             </div>
                                                             <div className="service-title">
                                                                      <span></span>
                                                                      <h4>{item.title}</h4>
                                                             </div>
                                                             <div className="service-link">
                                                                        <span><LuMoveUpRight /></span>
                                                             </div>
                                                   </div>
                                                    )}
                                        </div>

                                         <Link to={'/'} className="btn-link">View All Programs <span><GoArrowUpRight /></span></Link>
                             </div>
                </div>
    </div>
  )
}

export default ServicesSection