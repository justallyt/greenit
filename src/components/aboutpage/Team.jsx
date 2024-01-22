
import { team } from '../../data/team'
const Team = () => {
  return (
    <div className="team-section">
              <div className="inner-row">
                         <div className="team-section-content">
                                     <div className="team-intro">
                                               <h1>Meet The Team</h1>
                                               <p>We aggregate a wealth of skills and experience from a wide range of backgrounds to ensure the success of our organization.</p>
                                     </div>

                                     <div className="team-row">
                                            {
                                                 team.map(item => 
                                                    <div className="team-moja" key={item.id}>
                                                            <div className="team-image">
                                                                     <img src={item.image} alt="" />
                                                            </div>
                                                            <h3>{item.name}</h3>
                                                            <p>{item.position}</p>
                                                 </div>
                                                 )
                                            }
                                                 
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default Team