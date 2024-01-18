import { Link } from "react-router-dom"

const Nudge = () => {
  return (
    <div className="nudge-section">
            <div className="inner-row">
                      <div className="nudge-section-content">
                                   <h3>Want to make a difference?</h3>
                                   <h1>You can contribute to make the Environment Greener!</h1>
                                   <Link to={'/'}>Join our Community</Link>
                      </div>
            </div>
    </div>
  )
}

export default Nudge