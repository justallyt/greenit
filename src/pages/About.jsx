import AboutHero from "../components/aboutpage/AboutHero"
import Team from "../components/aboutpage/Team"
import Values from "../components/aboutpage/Values"
import Navbar from "../components/common/navigation/Navbar"
import "../css/about.css"
import Nudge from "../components/common/Nudge"
import Footer from "../components/common/Footer"
const About = () =>{
         return (
               <>
                    <Navbar />
                    <AboutHero />
                    <Values />
                    <Team />
                    <Nudge />
                    <Footer />
               </>
         )
}

export default About