import aboutImg1 from "../../assets/about3.jpg"
import aboutImg2 from "../../assets/about4.jpg"

const MoreAbout = () => {
  return (
    <div className="more-about-section">
              <div className="inner-row">
                          <div className="more-about-section-content">
                                     <div className="more-about-details">
                                               <div className="more-details-column">
                                                           <p>Greenit Environmental Management Network was established in 2022 with an aim to sensitize and develop awareness of environmental issues among learners and by extension members of society as a whole. Introducing environmental conversations early in their childhood development has greater long-team output in revamping ideologies pertaining issues such as climate change, pollution, deforestation and agro-technologies.</p>
                                                           <p>Greenit promotes sustainable practices, reduces carbon emissions, and inspires people to take meaningful action towards a greener, more sustainable future. We believe that it is our collective responsibility to take action against climate change and protect our planet against environmental degradation.</p>
                                               </div>
                                               <div className="more-details-column">
                                                          <p>By joining us, you can become part of a growing community of individuals, organizations, and communities who are committed to making a positive impact on the environment. We empower people to take action through education, advocacy, and community engagement, and offer a platform where you can make a real difference.</p>
                                                          <p>Our goal is to inspire and mobilize individuals and communities to become stewards of the environment. We work tirelessly towards promoting sustainable practices, raising awareness about climate change, and preserving natural resources for future generations. </p>
                                               </div>
                                    </div>

                                    <div className="statements-row">
                                                 <div className="statement-moja">
                                                          <h2>Our Mission</h2>
                                                          <p>To foster inclusive socio-economic empowerment through environmental protection programs, nurturing future leaders with the knowledge, passion, and skills for environmental sustainability, via diverse collaborative partnerships.</p>
                                                 </div>
                                                 <div className="statement-moja">
                                                          <h2>Our Vision</h2>
                                                          <p>To build a world where everyone is committed to environmental conservation and climate change action.</p>
                                                 </div>
                                    </div>

                                    <div className="about-hero-images">
                                                 <img src={aboutImg1} alt="" />
                                                 <img src={aboutImg2} alt="" />
                                     </div>
                          </div>
              </div>
    </div>
  )
}

export default MoreAbout