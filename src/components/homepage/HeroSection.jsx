import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="hero-section">
                 <div className="inner-row">
                           <div className="hero-section-content">
                                     <div className="hero-texts">
                                                <div className="hero-texts-column-left">
                                                          <div className="title-tag">
                                                                   <span></span>
                                                                    <h3>Non Governmental Organization</h3>
                                                          </div>
                                                          <h1>At the Forefront of Environmental Sustainability  & <span>Sensitization</span></h1>
                                                </div>
                                                <div className="hero-texts-column-right">
                                                             <p>We endeavour to promote environmental awareness in various communities for a better future for everyone</p>
                                                             <Link to={'/'}>What We Do</Link>
                                                </div>
                                     </div>

                                     <div className="hero-image"></div>
                           </div>
                 </div>
    </div>
  )
}

export default HeroSection