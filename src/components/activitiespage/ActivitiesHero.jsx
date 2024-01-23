import heroImage from "../../assets/service1.jpg"
const ActivitiesHero = () => {
  return (
    <div className="activities-hero">
              <div className="inner-row">
                          <div className="activities-hero-content">
                                    <div className="title-tag">
                                               <span></span>
                                                <h3>Activities We Engage In</h3>
                                    </div>
                                    <div className="activities-hero-grid">
                                               <div className="activities-hero-texts">
                                                         <h1>Our Contribution to Sustainable Development Agenda in Zambia</h1>
                                                         <p>GEMN incorporates a variety of important activites that help us strive forwards to attain sustainable development by 2030. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum obcaecati deserunt provident cupiditate laborum amet officiis quae impedit aliquid iure molestiae, fuga libero odio, sed, hic perferendis. Inventore, sapiente ipsam.</p>
                                               </div>
                                               <div className="activities-hero-image">
                                                         <img src={heroImage} alt="" />
                                               </div>
                                    </div>
                          </div>
              </div>
    </div>
  )
}

export default ActivitiesHero