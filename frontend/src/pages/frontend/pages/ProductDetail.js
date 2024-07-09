import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload] = useState(0);
  const [ setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await ProductService.index();
        setProducts(result.products);
        setTotal(result.total);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [reload]);
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
                Chi tiết sản phẩm
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image">
                <img
                  id="productimage"
                  className="img-fluid w-100"
                  src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                  alt=""
                />
              </div>
              <div className="list-image mt-3">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="img-fluid w-100"
                      src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                      alt=""
                      onclick="changeimage(src)"
                    />
                  </div>
                  <div className="col-3">
                    <img
                      className="img-fluid"
                      src={require("../public/images/product/thoi-trang-nu-1.jpg")}
                      alt=""
                      onclick="changeimage(src)"
                    />
                  </div>
                  <div className="col-3">
                    <img
                      className="img-fluid"
                      src={require("../public/images/product/thoi-trang-nu-2.jpg")}
                      alt=""
                      onclick="changeimage(src)"
                    />
                  </div>
                  <div className="col-3">
                    <img
                      className="img-fluid"
                      src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                      alt=""
                      onclick="changeimage(src)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="text-main">Tên sản phẩm</h1>
              <h3 className="fs-5">
                {" "}
                Video provides a powerful way to help you prove your point. When
                you click Online Video, you can paste in the embed code for the
                video you want to add. You can also type a keyword to search
                online for the
              </h3>
              <h2 className="text-main py-4">Giá: 3000000đ</h2>
              <div className="mb-3 product-size">
                <input
                  id="sizexxl"
                  type="radio"
                  className="d-none"
                  defaultValue="xxl"
                  name="size"
                />
                <label htmlFor="sizexxl" className="bg-info p-2">
                  XXX
                </label>
                <input
                  id="sizexl"
                  type="radio"
                  className="d-none"
                  defaultValue="xl"
                  name="size"
                />
                <label htmlFor="sizexl" className="bg-info p-2 px-3">
                  XL
                </label>
                <input
                  id="sizel"
                  type="radio"
                  className="d-none"
                  defaultValue="xl"
                  name="size"
                />
                <label htmlFor="sizel" className="bg-primary p-2 px-3">
                  M
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="">Số lượng</label>
                <input
                  type="number"
                  defaultValue={1}
                  name="qty"
                  className="form-control"
                  style={{ width: 200 }}
                />
              </div>
              <div className="mb-3">
                <a className="btn btn-main" href="checkout.html">
                  Mua ngay
                </a>
                <button className="btn btn-main">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
          <div className="row">
            <h2 className="text-main fs-4 pt-4">Chi tiết sản phẩm</h2>
            <p>
              Video provides a powerful way to help you prove your point. When
              you click Online Video, you can paste in the embed code for the
              video you want to add. You can also type a keyword to search
              online for the video that best fits your document. To make your
              document look professionally produced, Word provides header,
              footer, cover page, and text box designs that complement each
              other. For example, you can add a matching cover page, header, and
              sidebar. Click Insert and then choose the elements you want from
              the different galleries. Themes and styles also help keep your
              document coordinated. When you click Design and choose a new
              Theme, the pictures, charts, and SmartArt graphics change to match
              your new theme. When you apply styles, your headings change to
              match the new theme. Save time in Word with new buttons that show
              up where you need them. To change the way a picture fits in your
              document, click it and a button for layout options appears next to
              it. When you work on a table, click where you want to add a row or
              a column, and then click the plus sign. Video provides a powerful
              way to help you prove your point. When you click Online Video, you
              can paste in the embed code for the video you want to add. You can
              also type a keyword to search online for the video that best fits
              your document. To make your document look professionally produced,
              Word provides header, footer, cover page, and text box designs
              that complement each other. For example, you can add a matching
              cover page, header, and sidebar. Click Insert and then choose the
              elements you want from the different galleries. Themes and styles
              also help keep your document coordinated. When you click Design
              and choose a new Theme, the pictures, charts, and SmartArt
              graphics change to match your new theme.
            </p>
          </div>
          <div className="row">
            <h2 className="text-main fs-4 pt-4">Sản phẩm khác</h2>
            <div className="product-category mt-3">
              <div className="row product-list">
                <div className="col-6 col-md-3 mb-4">
                  <div className="product-item border">
                    <div className="product-item-image">
                      <a href="product_detail.html">
                        <img
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 1</a>
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
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 2</a>
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
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 2</a>
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
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 2</a>
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
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 2</a>
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
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 2</a>
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
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 2</a>
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
                          src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                          className="img-fluid"
                          alt=""
                          id="img1"
                        />
                        <img
                          className="img-fluid"
                          src={require("../public/images/product/thoi-trang-nam-2.jpg")}
                          alt=""
                          id="img2"
                        />
                      </a>
                    </div>
                    <h2 className="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Thời trang nam 2</a>
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
          </div>
        </div>
      </section>

      {/* End content */}
      <Footer />
      <EndFooter />
    </>
  );
};

export default ProductDetail;
