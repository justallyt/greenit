//import AboutHero from "../components/aboutpage/AboutHero"
import Team from "../components/aboutpage/Team"
import Values from "../components/aboutpage/Values"
import Navbar from "../components/common/navigation/Navbar"
import "../css/about.css"
import Nudge from "../components/common/Nudge"
import Footer from "../components/common/Footer"
import AboutHero2 from "../components/aboutpage/AboutHero2"
import MoreAbout from "../components/aboutpage/MoreAbout"
const About = () =>{
         return (
               <>
                    <Navbar />
                    <AboutHero2 />
                    <MoreAbout />
                    <Values />
                    <Team />
                    <Nudge />
                    <Footer />
               </>
         )
}

export default About