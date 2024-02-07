/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { LuMoveLeft } from "react-icons/lu";
import { Markup } from 'interweave'

const SingleArticleBody = ({ data }) => {
  return (
    <div className="single-article-body">
               <div className="inner-row">
                         <div className="single-article-content">
                                      <Link to={'/articles/'} className="back-btn"><span><LuMoveLeft /></span> Back to All Articles</Link>
                                      <h1 className="blog-title">{data.blogTitle}</h1>

                                      <div className="main-image">
                                                 <img src={data.articleImage.url} alt="" />
                                      </div>

                                      <div className="single-article-body-section">
                                                    <div className="author-side">
                                                             <div className="author-profile-image">
                                                                     <img src={data.createdBy.picture} alt="" />
                                                             </div>
                                                             <div className="autho-profile-text">
                                                                        <h4>{data.authorName.replaceAll("_", " ")}</h4>
                                                                         <p>{data.authorPosition.replaceAll("_", " ")}</p>
                                                             </div>
                                                    </div>
                                                    <div className="article-body">
                                                              <Markup content={data.articleBody.html} />
                                                    </div>
                                      </div>
                         </div>
               </div>
    </div>
  )
}

export default SingleArticleBody