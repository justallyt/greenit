import Footer from "../components/common/Footer"
import Nudge from "../components/common/Nudge"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/homepage/AboutSection"
import Articles from "../components/homepage/Articles"
import HeroSection from "../components/homepage/HeroSection"
import Portfolio from "../components/homepage/Portfolio"
import Process from "../components/homepage/Process"
import ServicesSection from "../components/homepage/ServicesSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <Process />
            <Portfolio />
            <Nudge />
            <Articles />
            <Footer />
    </>
  )
}

export default Home