import { Link } from "react-router-dom"
import Header from "../Components/Header"

import bloglist from "../utilis/blogdata"


const Blog = () => {
  return (
    <div>
     <Header  title="Blog Page" curPage="Blogs" />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
             <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-5">
                {
                  bloglist.map((blog,i) => (
                    <div key={i} className="col">
                        <div className="post-item">
                            <div className="post-inner">
                               <div className="post-thumb">
                                      <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} /></Link>
                               </div>
                               <div className="post-content">
                               <Link  to={`/blog/${blog.id}`} ><h4>{blog.title}</h4></Link>
                               <div className="meta-post">
                                   <ul className="lab-ul">
                                         {
                                          blog.metaList.map((val,i) => (
                                            <li key={i}>
                                              <i className={val.iconName}></i> {val.text}
                                            </li>
                                          ))
                                         }
                                   </ul>
                               </div> 
                               <p>{blog.desc}</p>

                               </div>
                               <div  className="post-footer">
                                      <div className="pf-left">
                                        <Link to={`/blog/${blog.id}`} className="lab-btn-text">{blog.btnText} <i className="icofont-external-link"></i></Link>
                                      </div>
                                      <div className="pf-rig">
                                      <i className="icofont-comment"><span className="comment-count">{blog.commentCount}</span></i>
                                            
                                      </div>
                               </div>
                            </div>
                        </div>

                    </div>
                  ))
                }

             </div>
          </div>
        </div>

      </div>


    <div>
      
    </div>

    </div>
  )
}

export default Blog