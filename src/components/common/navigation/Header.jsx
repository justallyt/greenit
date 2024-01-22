import { Link, NavLink } from 'react-router-dom'
import logo from "../../../assets/logo2.png"
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from 'react';
import { sidebarContext } from './navcontext';
const Header = () => {
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)

  const openSidebar = () => setSidebarStatus(true)
  return (
    <header>
              <div className="inner-row">
                         <div className="header-content">
                                    <Link to={'/'} className='logo'>
                                              <img src={logo} alt="Greenit logo" />
                                    </Link>
                                    <nav>
                                             <ul>
                                                     <li><NavLink to={'/'}>Home</NavLink></li>
                                                     <li><NavLink to={'/who-we-are/'}>Who We Are</NavLink></li>
                                                     <li><NavLink to={'/what-we-do/'}>What We Do</NavLink></li>
                                                     <li><NavLink to={'/articles/'}>Articles</NavLink></li>
                                             </ul>

                                             <div className="header-btn">
                                                       <Link to={'/contact-us/'}>Contact Us</Link>
                                                       <span onClick={openSidebar} className="mobile-btn"><HiOutlineMenu /></span>
                                             </div>
                                             
                                    </nav>
                         </div>
              </div>
    </header>
  )
}

export default Header