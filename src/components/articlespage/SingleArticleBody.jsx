import { Link } from "react-router-dom"
import articleImage from "../../assets/article1.jpg"
import { LuMoveLeft } from "react-icons/lu";
const SingleArticleBody = () => {
  return (
    <div className="single-article-body">
               <div className="inner-row">
                         <div className="single-article-content">
                                      <Link to={'/articles/'}><span><LuMoveLeft /></span> Back to All Articles</Link>
                                      <h1>The Business of Climate Change in Africa</h1>

                                      <div className="main-image">
                                                 <img src={articleImage} alt="" />
                                      </div>

                                      <div className="single-article-body-section">
                                                    <div className="author-side"></div>
                                                    <div className="article-body">
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi, assumenda asperiores voluptas ea dolor, quam laboriosam, rerum reiciendis quibusdam eum deserunt fugiat iste totam. Iste rerum quia excepturi quo consequatur nisi voluptate quis consectetur esse sed eligendi reiciendis maiores ipsam aut, doloribus sapiente ratione nihil ut fuga temporibus amet!</p>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste, omnis consequatur et unde, voluptas eius amet, distinctio earum nobis tempora modi non! Nam illum quasi aut officiis mollitia expedita quod ex velit at facere, illo esse quaerat eos ipsam fugiat in magni deleniti, blanditiis quo recusandae sunt molestiae? Ut qui, animi quisquam praesentium odit, quaerat culpa nobis laboriosam ratione vero eligendi facere sed nostrum. Tenetur in rerum nulla omnis minima quae officiis est. Sapiente labore corporis voluptatum eligendi odit. Corrupti eligendi magni, facere explicabo repudiandae quos doloribus fugiat deserunt molestias ad in similique error quia rem adipisci architecto assumenda.</p>
                                                    </div>
                                      </div>
                         </div>
               </div>
    </div>
  )
}

export default SingleArticleBody