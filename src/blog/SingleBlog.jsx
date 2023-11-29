import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost'
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curpage={"Blog/Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Deserunt unde excepturi
                                  voluptate itaque nam iste fugiat nostrum
                                  incidunt obcaecati neque sint ut sit omnis,
                                  autem quasi ex consequuntur, quod quos
                                  deleniti nisi. Cupiditate ea sit non, tenetur
                                  ab inventore voluptatibus eum quidem dolorem?
                                  Quo, sint. Natus illum repellendus illo
                                  magnam?
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Cum architecto cumque
                                    possimus beatae ipsam accusamus a,
                                    reiciendis fuga id blanditiis?
                                  </p>
                                  <cite>
                                    <a href="#">...Melisaa Hunter</a>
                                    <img
                                      src="/src/assets/images/blog/single/01.jpg"
                                      alt=""
                                    />
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Deserunt unde excepturi
                                  voluptate itaque nam iste fugiat nostrum
                                  incidunt obcaecati neque sint ut sit omnis,
                                  autem quasi ex consequuntur, quod quos
                                  deleniti nisi. Cupiditate ea sit non, tenetur
                                  ab inventore voluptatibus eum quidem dolorem?
                                  Quo, sint. Natus illum repellendus illo
                                  magnam?
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt="" 
                                  />
                                  <a
                                    href="https://youtu.be/iOw95PVhihg?si=FQEnjEye2mCHcOQM"
                                    className="video-button popup"
                                    target='_blank'
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Iusto eum, quos error
                                  suscipit vel sapiente quae, fugiat, possimus
                                  eveniet blanditiis quibusdam enim voluptatum
                                  accusantium accusamus facere amet laborum. Sed
                                  exercitationem earum facere labore tempora
                                  iure fugit at voluptas nisi nobis.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                        socialList.map((val,i)=>(
                                            <li key={i}>
                                                <a href="#" className={val.className}>
                                                    <i className={val.iconName}></i>
                                                </a>
                                            </li>
                                        ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculates Parallel Processes via Technics Sound Models Authoritative
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev">
                                <i className="icofont-double-right"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculates Parallel Processes via Technics Sound Models Authoritative
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
