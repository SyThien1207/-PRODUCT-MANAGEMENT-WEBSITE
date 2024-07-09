import React from "react";
const Post = () => {
  return (
    <div>
      <section className="hdl-lastpost bg-main mt-3 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h3>BÀI VIẾT MỚI</h3>
              <div className="row">
                <div className="col-md-6">
                  <a href="post_detail.html">
                    <img
                      className="img-fluid"
                      src={require("../public/images/post/post-4.webp")}
                    />
                   
                  </a>
                  <h3 className="post-title fs-4 py-2">
                    <a href="post_detail.html">Tieu đề bài viết mói nhất 1</a>
                  </h3>
                  <p>
                    Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu
                    đề bài viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài
                    viết mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài viết
                    mói nhất 1Tieu đề bài viết mói nhất 1Tieu đề bài viết mói
                    nhất 1Tieu đề bài viết mói nhất 1
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <a href="post_detail.html">
                        <img
                          className="img-fluid"
                     
                          src={require("../public/images/post/post-1.jpg")}
                        />
                      </a>
                    </div>
                    <div className="col-md-8">
                      <h3 className="post-title fs-5">
                        <a href="post_detail.html">
                          Tieu đề bài viết mói nhất 2
                        </a>
                      </h3>
                      <p>
                        Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất
                        1Tieu đề bài viết mói nhất 1
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <a href="post_detail.html">
                        <img
                          className="img-fluid"
                            src={require("../public/images/post/post-2.jpg")}
                        />
                      </a>
                    </div>
                    <div className="col-md-8">
                      <h3 className="post-title fs-5">
                        <a href="post_detail.html">
                          Tieu đề bài viết mói nhất 3
                        </a>
                      </h3>
                      <p>
                        Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất
                        1Tieu đề bài viết mói nhất 1
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <a href="post_detail.html">
                        <img
                          className="img-fluid"
                          src={require("../public/images/post/post-3.jpg")}
                        />
                      </a>
                    </div>
                    <div className="col-md-8">
                      <h3 className="post-title fs-5">
                        <a href="post_detail.html">
                          Tieu đề bài viết mói nhất 4
                        </a>
                      </h3>
                      <p>
                        Tieu đề bài viết mói nhất 1Tieu đề bài viết mói nhất
                        1Tieu đề bài viết mói nhất 1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">FACEBOOK</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
