import { useEffect } from "react"
import Footer from "../components/common/Footer"
import Nudge from "../components/common/Nudge"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/homepage/AboutSection"
import Articles from "../components/homepage/Articles"
//import HeroSection from "../components/homepage/HeroSection"
import HeroSection2 from "../components/homepage/HeroSection2"
import Portfolio from "../components/homepage/Portfolio"
import Process from "../components/homepage/Process"
//import ServicesSection from "../components/homepage/ServicesSection"
import "../css/home.css"
import { gql, useQuery } from '@apollo/client'
import ServicesSection2 from "../components/homepage/ServicesSection2"

const GET_ARTICLES = gql`
      query Greenit_Articles {
            greenit_Articles {
                 id
                 authorName
                 authorPosition
                 blogTitle
                 createdAt
                 date
                 slug
                 articleImage {
                      url
                  }
                 articleBody {
                     html
                 }
                createdBy {
                   picture
                 }
          }
    }`;

const Home = () => {

  //Pull articles from Hygraph
  const { loading, data } = useQuery(GET_ARTICLES);

  useEffect(() => {
        if(!loading && data){
             localStorage.setItem('Articles', JSON.stringify(data.greenit_Articles))
        }
  }, [data, loading])
  return (
    <>
            <Navbar />
            <HeroSection2 />
            <AboutSection />
            <ServicesSection2 />
            <Process />
            <Portfolio />
            <Nudge />
            <Articles />
            <Footer />
    </>
  )
}

export default Home