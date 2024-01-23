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
                                                              <p> <span><FaPhone /></span>+260 97 9445077</p>
                                                              <p><span><BsEnvelopeFill /></span>hello@gemnzambia.org</p>
                                                  </div>
                                                  <div className="contact-box">
                                                             <h3>Visit Office</h3>
                                                             <p><span><FaMapPin /></span>178 Brewery Drive, Hudson, NH 03041 Zambia</p>
                                                  </div>
                                                  <div className="contact-box">
                                                              <h3>Let&apos;s Connect</h3>
                                                              <div className="contact-social-links">
                                                                     <ul>
                                                                                <li><Link to={'/'}><span><FaFacebookF /></span></Link></li>
                                                                                <li><Link to={'/'}><span><FaXTwitter /></span></Link></li>
                                                                                <li><Link to={'/'}><span><AiFillInstagram /></span></Link></li>
                                                                                <li><Link to={'/'}><span><RxLinkedinLogo /></span></Link></li>
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