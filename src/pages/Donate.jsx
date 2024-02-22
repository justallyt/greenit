import DonationForm from "../components/common/DonationForm"
import Navbar from "../components/common/navigation/Navbar"
import Footer from '../components/common/Footer'

const Donate = () => {
  return (
    <>
          <Navbar />
          <div className="donate-body">
                     <div className="inner-row">
                               <div className="donate-body-content">
                                           <div className="donate-intro">
                                                         <h1>Donate</h1>
                                                         <p>Welcome to Greenit Environmental Management Network! We are excited that you share our passion for protecting our planet and preserving natural resources for future generations. Thank you for your support and commitment to creating a more sustainable future.</p>
                                           </div>
                               </div>
                     </div>
          </div>
          <DonationForm />
          <Footer />
    </>
  )
}

export default Donate