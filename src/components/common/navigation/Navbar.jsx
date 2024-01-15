import { useState } from "react"
import { sidebarContext } from "./navcontext";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <sidebarContext.Provider value={[navStatus, setNavStatus]}>
                <Header />
                <Sidebar />
    </sidebarContext.Provider>
  )
}

export default Navbar