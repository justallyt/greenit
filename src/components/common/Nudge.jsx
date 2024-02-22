import { Link } from "react-router-dom"
import { LiaDonateSolid } from "react-icons/lia";

const Nudge = () => {
  return (
    <div className="nudge-section">
            <div className="inner-row">
                      <div className="nudge-section-content">
                                   <h3>Want to make a difference?</h3>
                                   <h1>You can contribute to make the Environment Greener!</h1>
                                   <Link to={'/donate'}>Donate <span><LiaDonateSolid /></span></Link>
                      </div>
            </div>
    </div>
  )
}

export default Nudge