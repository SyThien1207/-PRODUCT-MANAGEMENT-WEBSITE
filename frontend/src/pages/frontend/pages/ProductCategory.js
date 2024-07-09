import React from "react";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";
const ProductCategory = () => {
  return (
    <>
      <Headers />
      <Menu />
      <section className="bg-light">
        <div className="container">
          <nav style={{ breadcrumbDivider: ">" }} aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Sản phẩm theo loại
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3">
                  Danh mục sản phẩm
                </li>
                <li className="list-group-item">
                  <a href="product_category.html">Thời trang nam</a>
                </li>
                <li className="list-group-item">
                  <a href="product_category.html">Thời trang nữ</a>
                </li>
                <li className="list-group-item">
                  <a href="product_category.html">Thời trang trẻ em</a>
                </li>
                <li className="list-group-item">
                  <a href="product_category.html">Thời trang thể thao</a>
                </li>
              </ul>
              <ul className="list-group mb-3 list-brand">
                <li className="list-group-item bg-main py-3">Thương hiệu</li>
                <li className="list-group-item">
                  <a href="product_brand.html">Việt Nam</a>
                </li>
                <li className="list-group-item">
                  <a href="product_brand.html">Hàn Quốc</a>
                </li>
                <li className="list-group-item">
                  <a href="product_brand.html">Thái Lan</a>
                </li>
                <li className="list-group-item">
                  <a href="product_brand.html">Quản Châu</a>
                </li>
              </ul>
              <ul className="list-group mb-3 list-product-new">
                <li className="list-group-item bg-main py-3">Sản phẩm mới</li>
                <li className="list-group-item">
                  <div className="product-item border">
                    <div className="product-item-image">
                      <a href="product_detail.html">
                        <img
                         src={require("../public/images/product/thoi-trang-the-thao-1.webp")}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang thể thao 1</a>
                    </h2>
                    <h3 className="product-item-price fs-6 p-2 d-flex">
                      <div className="flex-fill">
                        <del>200.000đ</del>
                      </div>
                      <div className="flex-fill text-end text-main">
                        190.000đ
                      </div>
                    </h3>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="product-item border">
                    <div className="product-item-image">
                      <a href="product_detail.html">
                        <img
                         src={require("../public/images/product/thoi-trang-the-thao-2.webp")}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang thể thao 2</a>
                    </h2>
                    <h3 className="product-item-price fs-6 p-2 d-flex">
                      <div className="flex-fill">
                        <del>200.000đ</del>
                      </div>
                      <div className="flex-fill text-end text-main">
                        190.000đ
                      </div>
                    </h3>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="product-item border">
                    <div className="product-item-image">
                      <a href="product_detail.html">
                        <img
                         src={require("../public/images/product/thoi-trang-the-thao-1.webp")}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang thể thao 3</a>
                    </h2>
                    <h3 className="product-item-price fs-6 p-2 d-flex">
                      <div className="flex-fill">
                        <del>200.000đ</del>
                      </div>
                      <div className="flex-fill text-end text-main">
                        190.000đ
                      </div>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-9 order-1 order-md-2">
              <div className="category-title bg-main">
                <h3 className="fs-5 py-3 text-center">THỜI TRANG TRẺ EM</h3>
              </div>
              <div className="product-category mt-3">
                <div className="row product-list">
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img
                               src={require("../public/images/product/thoi-trang-tre-em-1.webp")}
                            className="img-fluid"
                            alt=""
                            id="img1"
                          />
                          <img
                            className="img-fluid"
                            src="../public/images/product/thoi-trang-tre-em-2.webp"
                            alt=""
                            id="img2"
                          />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Thời trang trẻ em 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill">
                          <del>200.000đ</del>
                        </div>
                        <div className="flex-fill text-end text-main">
                          190.000đ
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Phân trang">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a
                      className="page-link text-main"
                      href="product_category.html"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-main"
                      href="product_category.html"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-main"
                      href="product_category.html"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-main"
                      href="product_category.html"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link text-main"
                      href="product_category.html"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* End content */}
      <Footer />
      <EndFooter />
    </>
  );
};

export default ProductCategory;
