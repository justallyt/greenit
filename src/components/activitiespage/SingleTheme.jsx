/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
const SingleTheme = ({ data }) => {
    const [status, setStatus] = useState(false);

    const switchStatus = () => setStatus(!status);

  return (
    <div className={status ? "theme-moja active" : "theme-moja"} onClick={switchStatus}>
              <div className="theme-header">
                        <h3>{data.title}</h3>
                        <span><AiOutlineCaretDown /></span>
              </div>
               <div className="theme-body">
                         <div className="theme-body-inner">
                                   <div className="intro">
                                             <p>{data.introText}</p>
                                   </div>
                                   <div className="theme-list-row">
                                              <div className="theme-list-column">
                                                         <div className="theme-list">
                                                                <ul>
                                                                         { data.content.map((item, index) => 
                                                                                  <li key={item.id}>
                                                                                          <div className="number">
                                                                                                     {index+1}. 
                                                                                         </div>
                                                                                          <div className="list-texts">
                                                                                                   <h4>{item.list_name}</h4>
                                                                                                    { item.list_description === " " ? 
                                                                                                          item.list_body.map(item => <p key={item} className="inner-list" ><span></span>{item}</p>)
                                                                                                     :
                                                                                                         <p>{item.list_description}</p>
                                                                                                     }
                                                                                          </div>                                        
                                                                                  </li>
                                                                           )}
                                                                </ul>
                                                      </div>
                                              </div>
                                              <div className="theme-list-column image">
                                                          <img src={data.image} alt="" />
                                              </div>
                                   </div>
                         </div>
               </div>
    </div>
  )
}

export default SingleTheme