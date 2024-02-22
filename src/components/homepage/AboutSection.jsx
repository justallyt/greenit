import { Link } from 'react-router-dom'
import about1 from '../../assets/about1.jpg'
import logo1 from '../../assets/pollination.jpg'
import logo2 from '../../assets/biosoilz.png'
import logo3 from '../../assets/zccn.webp'
import logo4 from '../../assets/moe.jpg'
import logo5 from '../../assets/cej.png'
import logo6 from '../../assets/njamasi.jpg'

const AboutSection = () => {
  return (
    <div className="about-section">
               <div className="inner-row">
                          <div className="title-tag blue">
                                    <span></span>
                                      <h3>Who We Are</h3>
                           </div>
                          <div className="about-section-content">
                                       <div className="about-section-column picture">
                                                  <div className="about-image">
                                                            <img src={about1} alt="" />
                                                  </div>
                                       </div>
                                       <div className="about-section-column description">
                                                   <h2>Green is Great  Every Season</h2>
                                                  <h4>Greenit Environmental Management Network works to promote sustainable, equitable and participatory development through <span>environmental research</span> and <span>dissemination</span> of socially relevant educative materials.</h4>
                                                  <p>We are a non governmental organization in Zambia working in the Enviromental and Climate Change sector that not only promotes sustainable development in rural communities but also enhances Environmental education and awareness for a greater future in Health, Agriculture and Economic development.</p>

                                                  <p>Our organization is rapidly expanding in the social development sphere by incorporating various activities in an effort to attain sustainable development goals by 2030. We contribute relevant and contemporary education on the effects of deforestation, plastic pollution, climate change, waste management, water management etc., to learners in schools and to the general public</p>

                                                  <Link to={'/who-we-are/'}>Read More</Link>
                                       </div>
                          </div>
                          <div className="partners-section">
                                      <div className="partners-title">
                                                 <h3>Our Partners</h3>
                                                 <span></span>
                                      </div>
                                      <div className="partner-logos">
                                                 <img src={logo1} alt="" />
                                                 <img src={logo2} alt="" />
                                                 <img src={logo3} alt="" />
                                                 <img src={logo4} alt="" />
                                                 <img src={logo5} alt="" />
                                                 <img src={logo6} alt="" />
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default AboutSection