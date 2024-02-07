import { themes } from "../../data/thematic"
import SingleTheme from "./SingleTheme"

const ThemesBody = () => {
  return (
    <div className="themes-body-section">
               <div className="inner-row">
                         <div className="themes-body-section-content">
                                      <h2>Our organization is active and spread across the country using research, advocacy, impact investment, and assessment of emerging technologies to spearhead environmental sustainability and climate impacts.</h2>
                                      

                                      <div className="themes-body-row">
                                                  { themes.map(item => 
                                                        <SingleTheme data={item} key={item.id} />
                                                    )}
                                      </div>
                         </div>
               </div>
    </div>
  )
}

export default ThemesBody