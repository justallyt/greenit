import { values } from "../../data/values"

const Values = () => {
  return (
    <div className='values-section'>
             <div className="inner-row">
                       <div className="values-section-content">
                                 <div className="values-intro">
                                            <h1>Values we Uphold as an Organization</h1>
                                 </div>

                                 <div className="values-content-row">
                                    { values.map(item => 
                                          <div className="value-moja" key={item.id}>
                                                       <div className="value-icon">
                                                                 <img src={item.image} alt="" />
                                                       </div>
                                                       <h3>{item.title}</h3>
                                                       <p>{item.description}</p>
                                           </div>
                                      )}
                                 </div>
                       </div>
             </div>
    </div>
  )
}

export default Values