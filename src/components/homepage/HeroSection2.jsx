import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSection2 = () => {
    const slides = ['one', 'two', 'three'];
  return (
    <div className="hero-section-v2">
               <div className="hero-slides-container">
                        <div className="slides">
                                    <Swiper
                                          slidesPerView={1}
                                          loop={true}
                                          speed={1500}
                                          autoplay={{
                                                  delay: 7500,
                                                  disableOnInteraction: false
                                          }}
                                          modules={[Autoplay]}
                                    >
                                             { slides.map(item => 
                                                   <SwiperSlide key={item}>
                                                             {({isActive}) => (
                                                                   <div className={`single-slide ${item}`}>
                                                                            <div className="inner-row">
                                                                                       <div className="single-slide-content">
                                                                                                   <div className={isActive ? "slide-texts active" : "slide-texts"}>
                                                                                                              <div className="title-tag">
                                                                                                                       <span></span>
                                                                                                                       <h3>Non Governmental Organization</h3>
                                                                                                              </div>
                                                                                                             <h1>At the Forefront of Environmental <span className="test">Sustainability</span>  & <span>Sensitization</span>.</h1>
                                                                                                             <p>We endeavour to promote sustainable practices and raise environmental awareness about climate change and preserving natural resources for future generations.</p>
                                                                                                             <Link href="/">Explore</Link>
                                                                                                   </div>
                                                                                       </div>
                                                                            </div>
                                                                   </div>
                                                             )}
                                                   </SwiperSlide>
                                            )}
                                    </Swiper>
                        </div>
               </div>
    </div>
  )
}

export default HeroSection2