import React, { useState } from "react";
import bloglist from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Tags from "../Shop/Tags";
import Populatpost from "../Shop/Populatpost";


const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const SingleBlog = () => {
  const [blog, setBlog] = useState(bloglist);

  const { id } = useParams();
  const blogId = Number(id);
  //   console.log(id)
  const result = blog.filter((p) => p.id === blogId);

  return (
    <div>
      <Header curPage={"Blog  /  Blog Pages "} title={"single  Blog Page"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {result.map((item) => (
                          <div key={item.id}>
                            <div className="post-thumb">
                              <img src={item.imgUrl} />
                            </div>
                            <div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                <div className="lab-ul">
                                   
                                   <ul className="lab-ul">
                                         {
                                          item.metaList.map((val,i) => (
                                            <li key={i}>
                                              <i className={val.iconName}></i> {val.text}
                                            </li>
                                          ))
                                         }
                                   </ul> 

                                   </div>
                                   <p>There s something magical about early morning walks. The cool, crisp air feels refreshing as it gently awakens your senses. Birds chirping in the dawn light provide a soothing soundtrack to the start of your day. The sight of the sun rising, painting the sky with hues of pink and orange, is a daily masterpiece. These walks not only boost your physical health but also clear your mind, setting a positive tone for the day ahead. Embrace the tranquility of morning walks and discover a peaceful beginning to your day</p>
                                      <blockquote> <p> There s something magical about early morning walks. The cool, crisp air feels refreshing as it gently awakens your senses.</p>
                                          <cite><a href="#">...... Ajay</a></cite>
                                      
                                      </blockquote>

                                      <img  src="/src/assets/images/blog/single/01.jpg"/>

                                      <p>
                                      Theres  something magical about early morning walks. The cool, crisp air feels refreshing as it gently awakens your senses. Birds chirping in the dawn light provide a soothing soundtrack to the start of your day. The sight of the sun rising, painting the sky with hues of pink and orange, is a daily masterpiece. These walks not only boost your physical health but also clear your mind, setting a positive tone for the day ahead. Embrace the tranquility of morning walks and discover a peaceful beginning to your day
                                      </p>
                                
                                      <div className="video-thumb">
                                           <img  src="/src/assets/images/blog/single/02.jpg" />
                                            <a  target="_blank" className="video-button popup" href="https://www.youtube.com/watch?v=DpkswrRekBQ">
                                                <i className="icofont-ui-play"></i>


                                            </a>

                                      </div> 

                                      <p>
                                      There s something magical about early morning walks. The cool, crisp air feels refreshing as it gently awakens your senses. Birds chirping in the dawn light provide a soothing soundtrack to the start of your day. The sight of the sun rising, painting the sky with hues of pink and orange, is a daily masterpiece. These walks not only boost your physical health but also clear your mind, setting a positive tone for the day ahead. Embrace the tranquility of morning walks and discover a peaceful beginning to your day
                                      </p>
                                      <div className="tags-section">
                                                 <ul className="tags lab-ul">
                                                    <li>
                                                        <a href="#" >Agency</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Bussiness</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" >Personal</a>
                                                    </li>
                                                   
                                                 </ul>

                                                 <ul className="lab-ul social-icons">
                                                   {
                                                    socialList.map((val,i) => (

                                                        <li key={i}>
                                                            <a href="#" className={val.className}><i className={val.iconName}></i></a>
                                                        </li>
                                                    ))
                                                   }

                                                 </ul>
                                      </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                   
                  </div>
                  
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">

                <Tags  />
                <Populatpost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
