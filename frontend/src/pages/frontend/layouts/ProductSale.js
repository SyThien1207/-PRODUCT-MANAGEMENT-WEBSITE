import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";
import { Link } from "react-router-dom";

const ProductSale = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [total, setTotal] = useState(0);
  const [productSales, setProductSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const allProductsResult = await ProductService.index();
        const allProducts = allProductsResult.products.filter(
          (product) => product.status === 1
        );
        const productSalesResult = await ProductService.index();
        const sales = productSalesResult.products;
        setTotal(productSalesResult.total);
        const productIds = sales.map((sale) => sale.product_id);
        const relevantProducts = allProducts.filter((product) =>
          productIds.includes(product.id)
        );

        // Limit to 5 products
        const limitedProducts = relevantProducts.slice(0, 5);

        setProducts(limitedProducts);
        setProductSales(sales);
        setLoad(false);
      } catch (error) {
        console.error("Error:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [reload]);

  return (
    <div className="header-sale">
      <div className="header-text">Sản phẩm khuyến mãi</div>
      <div className="product-sale">
        <div className="product-list">
          {products.map((product, index) => (
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
                <div className="product-price">
                  {productSales[index] && productSales[index].pricesale
                    ? productSales[index].pricesale
                    : product.price}
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <button className="view-more-button">
          Xem thêm sản phẩm khuyến mãi
        </button>
      </div>
    </div>
  );
};

export default ProductSale;
