import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";

const Product = () => {
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
      <section className="hdl-maincontent">
        <div className="container">
          <div className="product-category mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="category-title bg-main">
                  <h1 className="fs-5 py-3 text-center text-uppercase">
                    THỜI TRANG NAM
                  </h1>
                  <img
                    className="img-fluid d-none d-md-block"
                    src={require("../public/images/category/thoi-trang-nam.png")}
                    alt="category.jpg"
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="row product-list">
                  {load ? (
                    <p>Loading...</p>
                  ) : (
                    products.length > 0 &&
                    products.map((product) => (
                      <div className="col-6 col-md-3 mb-4" key={product.id}>
                        <div className="product-item border">
                          <div className="product-item-image">
                            <a href="/productdetail">
                              <img
                                src={`${urlImage}product/${product.image}`}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <h2 className="product-item-name text-main text-center fs-5 py-1">
                            <a href="/productdetail">{product.name}</a>
                          </h2>
                          <h3 className="product-item-price fs-6 p-2 d-flex">
                            <div className="flex-fill text-end text-main">
                              {product.price}
                            </div>
                          </h3>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
