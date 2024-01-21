import footerLogo from "../../assets/logo2.png"
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbCurrentLocation } from "react-icons/tb";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                         <div className="footer-content">
                                     <div className="footer-column">
                                                 <div className="footer-logo">
                                                             <img src={footerLogo} alt="" />
                                                 </div>
                                                 <p>Greenit Environmental Management Network is an NGO spearheding the green revolution for the Earth in Africa.</p>

                                                 <h4>Follow us on</h4>
                                                 <div className="footer-social-links">
                                                            <ul>
                                                                      <li><a href=""><span><FaFacebookF /></span></a></li>
                                                                      <li><a href=""><span><BsTwitterX /></span></a></li>
                                                                      <li><a href=""><span><AiFillInstagram /></span></a></li>
                                                                      <li><a href=""><span><FaLinkedinIn /></span></a></li>
                                                            </ul>
                                                 </div>
                                     </div>
                                     <div className="footer-column-grid">
                                                <div className="footer-column">
                                                           <h3><span></span>Quick Links</h3>
                                                           <ul>
                                                                    <li><Link to={''}>Home</Link></li>
                                                                    <li><Link to={''}>About</Link></li>
                                                                    <li><Link to={''}>Programs & Activities</Link></li>
                                                                    <li><Link to={''}>Articles</Link></li>
                                                                    <li><Link to={''}>Press</Link></li>
                                                                    <li><Link to={''}>Contact Us</Link></li>
                                                           </ul>
                                                </div>
                                                <div className="footer-column">
                                                         <h3><span></span>Get in Touch</h3>
                                                          <p>
                                                                    <span><TbCurrentLocation /></span>
                                                                    Nampundwe Chibombo, Shibuyunji District
                                                          </p>
                                                          <p>
                                                                     <span><BsEnvelope /></span>
                                                                     hello@gemnzambia.org
                                                          </p>
                                                          <p>
                                                                     <span><FiPhoneCall /></span>
                                                                     +260 123456789
                                                          </p>
                                                </div>
                                     </div>
                         </div>

                         <Copyright />
              </div>
    </footer>
  )
}

export default Footer