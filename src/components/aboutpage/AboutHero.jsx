import aboutHero from "../../assets/about2.jpg"
import aboutImg1 from "../../assets/about3.jpg"
import aboutImg2 from "../../assets/about4.jpg"
const AboutHero = () => {
  return (
    <div className="about-hero-section">
              <div className="inner-row">
                         <div className="title-tag">
                                      <span></span>
                                      <h3>About Us</h3>
                         </div>
                         <div className="about-hero-content">
                                     <div className="about-hero-texts">
                                              <h1>We are a Nonprofit Team working to implement Environment and Natural resource policies for Sustainable Development.</h1>
                                              <p>Greenit Environmental Management Network was established in 2022 with an aim to sensitize and develop awareness of environmental issues among learners and by extension members of society as a whole.Introducing environmental conversations early in their childhood development has greater long-team output in revamping ideologies pertaining issues such as climate change, pollution, deforestation and agro-technologies etc.</p>
                                     </div>
                                    <div className="image">
                                               <img src={aboutHero} alt="" />
                                    </div>
                         </div>
                         <div className="more-details">
                                      <div className="more-details-row">
                                                 <p>We established the organization to Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maxime ipsa voluptatum illum aliquam modi veritatis voluptate, fuga architecto fugit reprehenderit asperiores eligendi quo quidem sed repellendus deleniti at quisquam optio est eaque eos sapiente temporibus. Fugiat eum corporis possimus!</p>
                                                 <p>Having established direct link to the Forestry Department and its systems across the district, we have been able to structure constructive dialogue among stakeholders thereby fostering open sharing of knowledge and driving the environmental agenda forwards.</p>
                                                 <p>We have also undertaken various projects and ideas, partnered with other stakeholders to implement organization&apos;s programs in schools, urban centers, farms and also engaged the media to push the conversation of positive climate and environmental change.</p>
                                      </div>
                                      <div className="statements-row">
                                                 <div className="statements-inner">
                                                              <h3> <span></span>Our Mission</h3>
                                                              <p className="mission">We are on a mission to promote inclusive socio-economic empowerment through cross-cutting environmental protection programs to develop the next generation of leaders with knowledge and skills that are stimulative and work towards environmental sustainability through diverse collaborative partnerships.</p>
                                                               <div className="separator"></div>
                                                              <h3><span></span>Our Vision</h3>
                                                              <p>A just and equitable society that promotes environmental protection for sustainable development.</p>
                                                 </div>
                                      </div>
                         </div>

                         <div className="about-hero-images">
                                     <img src={aboutImg1} alt="" />
                                     <img src={aboutImg2} alt="" />
                         </div>
              </div>
    </div>
  )
}

export default AboutHero