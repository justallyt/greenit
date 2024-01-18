import process1 from '../../assets/ideation.png'
import process2 from "../../assets/briefing.png"
import process3 from "../../assets/implement.png"
import process4 from '../../assets/complete.png'
const Process = () => {
  return (
    <div className="process-section">
              <div className="inner-row">
                            <div className="process-section-content">
                                         <div className="process-intro">
                                                     <h3>Our Process</h3>
                                                     <h1>How we <span>Work</span></h1>
                                                     <p>We have a structured work process to ensure that our projects handled can be completed properly and accordingly. Here are the step by step process how we go about it:</p>
                                         </div>

                                         <div className="process-row">
                                                     <div className="process-moja">
                                                                 <div className="process-box-image">
                                                                             <img src={process1} alt="" />
                                                                 </div>
                                                                 <h3>Ideation</h3>
                                                                 <p>Generated through brainstorming, research and observation.</p>
                                                     </div>
                                                     <div className="process-moja">
                                                                 <div className="process-box-image">
                                                                             <img src={process2} alt="" />
                                                                 </div>
                                                                 <h3>Briefing</h3>
                                                                 <p>Summary of information or instructions given before a project.</p>
                                                     </div>
                                                     <div className="process-moja">
                                                                 <div className="process-box-image">
                                                                             <img src={process3} alt="" />
                                                                 </div>
                                                                 <h3>Implemention</h3>
                                                                 <p>Set of actions that transform inputs into desired outputs.</p>
                                                     </div>
                                                     <div className="process-moja">
                                                                 <div className="process-box-image">
                                                                             <img src={process4} alt="" />
                                                                 </div>
                                                                 <h3>Completion</h3>
                                                                 <p>Final stage of a process where the product or outcome is completed.</p>
                                                     </div>
                                         </div>
                            </div>
              </div>
    </div>
  )
}

export default Process