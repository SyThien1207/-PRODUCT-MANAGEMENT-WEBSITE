import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";
import "../public/css/productnew.css"
const ProductNew = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await ProductService.index();
        setProducts(result.products);
        setTotal(result.total);
        setLoad(false);
      } catch (error) {
        console.error("Error:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [reload]);
  const limitedProducts = products
    .filter((product) => product.status === 1)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  return (
    <div className="header-sale">
      <div className="header-text">Sản phẩm mới</div>
      <div className="product-sale">
        <div className="product-list">
          {limitedProducts.map((product) => (
            <Link to={`/product/${product.slug}`}>
              <div key={product.id} className="product-item">
                <div className="products-image">
                  <img
                    className="product-images"
                    src={urlImage + "product/" + product.image}
                    alt={product.name}
                  />
                </div>
                <div className="product-details">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className="view-more-button">Xem thêm sản phẩm mới</button>
      </div>
    </div>
  );
};

export default ProductNew;