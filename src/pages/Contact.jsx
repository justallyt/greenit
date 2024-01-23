import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contactpage/ContactBody"
import ContactHero from "../components/contactpage/ContactHero"
import "../css/contact.css"
import Footer from '../components/common/Footer'
const Contact = () => {
  return (
    <>
          <Navbar />
          <ContactHero />
          <ContactBody />
          <Footer />
    </>
  )
}

export default Contact