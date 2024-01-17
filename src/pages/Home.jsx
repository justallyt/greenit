import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/homepage/AboutSection"
import HeroSection from "../components/homepage/HeroSection"
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
    </>
  )
}

export default Home