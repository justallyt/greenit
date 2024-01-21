import { Link, NavLink } from "react-router-dom"
import Logo from "../../../assets/logo2.png"
import { CgClose } from "react-icons/cg";
import { BsEnvelope } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import gsap from 'gsap'
import { useContext, useEffect, useRef } from "react";
import { sidebarContext } from "./navcontext";

const Sidebar = () => {
  const [sidebarStatus,setSidebarStatus] = useContext(sidebarContext)
  const sidebarRef = useRef();
  useEffect(() =>{
          if(sidebarStatus){
                sidebarRef.current.classList.add('active');
                const tl = gsap.timeline();

                tl.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                        y: 0,
                        duration: 1
                })
                tl.to(sidebarRef.current.querySelector('.sidebar-content'), {
                       x: 0,
                       duration: 1
                })
          }else{
               const tl = gsap.timeline();
               tl.to(sidebarRef.current.querySelector('.sidebar-content'), {
                       x: '-100%',
                       duration: 1
               })
               tl.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                     y: '-100%',
                     duration: 1
               })
               setTimeout(() => {
                      sidebarRef.current.classList.remove("active")
               }, 2000)
          }
  }, [sidebarStatus])

  const closeSidebar = () => setSidebarStatus(false);
  return (
    <div ref={sidebarRef} className="sidebar-section">
               <div className="sidebar-overlay"></div>
               <div className="sidebar-content">
                           <div className="sidebar-inner">
                                      <div className="sidebar-head">
                                               <Link to={'/'}>
                                                        <img src={Logo} alt="" />
                                               </Link>
                                               <span onClick={closeSidebar} className="closebtn"><CgClose /></span>
                                      </div>
                                      <nav>
                                                <ul>
                                                     <li><NavLink to={'/'}>Home</NavLink></li>
                                                     <li><NavLink to={'/who-we-are/'}>Who We Are</NavLink></li>
                                                     <li><NavLink to={'/what-we-do/'}>What We Do</NavLink></li>
                                                     <li><NavLink to={'/articles/'}>Articles</NavLink></li>
                                                     <li><NavLink to={'/projects/'}>Projects</NavLink></li>
                                                     <li><NavLink to={'/contact-us/'}>Contact Us</NavLink></li>
                                              </ul>
                                      </nav>

                                      <div className="sidebar-details">
                                                <h4>Email Us</h4>
                                                 <div className="details-box">
                                                          <span><BsEnvelope /></span>
                                                          <p>hello@gemnzambia.org</p>
                                                 </div>
                                                 <h4>Call Us:</h4>
                                                 <div className="details-box">
                                                           <span><IoMdCall /></span>
                                                           <p>+260 97 9445077</p>
                                                 </div>
                                      </div>
                           </div>
               </div>
    </div>
  )
}

export default Sidebar