import React from 'react'

export default function Blog() {
  return (
    <section id="blog-1" className="pt-8 blog-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* Section ID */}
              <span className="section-id">From The Blog</span>
              {/* Title */}
              <h2 className="h2-title">Our Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* BLOG POST #1 */}
          <div className="col-md-6 col-lg-4">
            <div id="bp-1-1" className="blog-post wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/blog/img-01.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="post-tag">News | August 03, 2023</p>
                {/* Post Link */}
                <h5 className="h5-md post-link">
                  <a href="single-post.html">
                    Quaerat sodales sapien and tempor diam euismod purus
                  </a>
                </h5>
                {/* Text */}
                <p className="mb-0">
                  Velna purus purus magna ipsum suscipit egestas magna aliquam
                  ipsum vitae...
                </p>
              </div>
            </div>
          </div>{" "}
          {/* END BLOG POST #1 */}
          {/* BLOG POST #2 */}
          <div className="col-md-6 col-lg-4">
            <div id="bp-1-2" className="blog-post wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/blog/img-05.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="post-tag">Trends | July 31, 2023</p>
                {/* Post Link */}
                <h5 className="h5-md post-link">
                  <a href="single-post.html">Luctus vitae and egestas</a>
                </h5>
                {/* Post Text */}
                <p className="mb-0">
                  Congue augue sagittis egestas integer velna purus purus magna
                  suscipit...
                </p>
              </div>
            </div>
          </div>{" "}
          {/* END BLOG POST #2 */}
          {/* BLOG POST #3 */}
          <div className="col-md-12 col-lg-4">
            <div id="bp-1-3" className="blog-post wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/blog/img-03.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="post-tag">Treatment | July 18, 2023</p>
                {/* Post Link */}
                <h5 className="h5-md post-link">
                  <a href="single-post.html">
                    Magna aliquam ipsum a vitae purus justo lacus ligula
                  </a>
                </h5>
                {/* Post Text */}
                <p className="mb-0">
                  Congue augue sagittis egestas integer velna purus and magna
                  ipsum suscipit...
                </p>
              </div>
            </div>
          </div>{" "}
          {/* END BLOG POST #3 */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  )
}
