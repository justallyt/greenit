import ActivitiesHero from "../components/activitiespage/ActivitiesHero"
import ThemesBody from "../components/activitiespage/ThemesBody"
import Nudge from "../components/common/Nudge"
import Navbar from "../components/common/navigation/Navbar"
import "../css/activities.css"
import Footer from "../components/common/Footer"
import Portfolio from "../components/homepage/Portfolio"

const Programs = () => {
  return (
    <>
          <Navbar />
          <ActivitiesHero />
          <ThemesBody />
          <Portfolio />
          <Nudge />
          <Footer />
    </>
  )
}

export default Programs