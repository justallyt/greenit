import { FaPhone,  FaFacebookF, FaXTwitter, FaMapPin } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { RxLinkedinLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <div className="contact-section">
               <div className="inner-row">
                          <div className="contact-section-content">
                                     <div className="contact-section-column">
                                                <div className="title-tag">
                                                            <span></span>
                                                            <h3>Contact Us</h3>
                                                </div>
                                                <h1>We&apos;d love to hear from you</h1>
                                                <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details. We&apos;ll get back to you as humanly possible.</p>
                                     </div>
                                     <div className="contact-section-column">
                                                  <div className="contact-box">
                                                              <h3>Let&apos;s talk!</h3>
                                                              <p> <span><FaPhone /></span>+260 979 445 077 / +260 969 520 500</p>
                                                              <p><span><BsEnvelopeFill /></span>info@greenitzambia.org</p>
                                                  </div>
                                                  <div className="contact-box">
                                                             <h3>Visit Office</h3>
                                                             <p><span><FaMapPin /></span>Plot 74 - 90 Section, Nampundwe Township, Shibuyunji - LUSAKA
</p>
                                                  </div>
                                                  <div className="contact-box">
                                                              <h3>Let&apos;s Connect</h3>
                                                              <div className="contact-social-links">
                                                                     <ul>
                                                                                <li><Link to={'https://web.facebook.com/profile.php?id=100086097650802'}><span><FaFacebookF /></span></Link></li>
                                                                                {/* <li><Link to={'/'}><span><FaXTwitter /></span></Link></li>
                                                                                <li><Link to={'/'}><span><AiFillInstagram /></span></Link></li> */}
                                                                                <li><Link to={'https://www.linkedin.com/company/greenit-enviromental-management-network/'}><span><RxLinkedinLogo /></span></Link></li>
                                                                     </ul>
                                                              </div>
                                                  </div>
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default ContactHero