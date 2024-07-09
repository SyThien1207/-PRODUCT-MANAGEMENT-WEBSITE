import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";
import { Link } from "react-router-dom";
import ProductSaleService from "../../../services/ProductSaleService";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";
const Productt = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [countProduct, setcountProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [showPagination, setShowPagination] = useState(true);
  const [displayFormat, setDisplayFormat] = useState("grid"); // Default display format is grid
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await ProductService.paginate(
          currentPage,
          perPage,
          selectedCategory,
          selectedBrand,
          selectedPrice
        );
        const paginatedProducts = result.products;
        setTotal(result.total);

        const productSalesResult = await ProductSaleService.index();
        const productSales = productSalesResult.products;

        const priceSaleMap = {};
        productSales.forEach((productSale) => {
          priceSaleMap[productSale.product_id] = productSale.pricesale;
        });

        const updatedProducts = paginatedProducts.map((product) => ({
          ...product,
          pricesale: priceSaleMap[product.id] || product.price,
        }));

        // Filter products with status === 1
        const filteredProducts = updatedProducts.filter(
          (product) => product.status === 1 
        );

        setProducts(filteredProducts);
        // Fetch categories
        const resultCategories = await CategoryService.index();
        const filteredCategories = resultCategories.categories.filter(
          (category) => category.status === 1
        );
        setCategories(filteredCategories);

        // Fetch brands
        const brandResult = await BrandService.index();
        const filteredBrands = brandResult.brands.filter(
          (brand) => brand.status === 1
        );
        setBrands(filteredBrands);
        setcountProduct(result.countProduct);
        setLoad(false);
      } catch (error) {
        console.error("Error:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [
    reload,
    currentPage,
    perPage,
    selectedCategory,
    selectedBrand,
    selectedPrice,
  ]);

  const renderPagination = () => {
    const totalPages = Math.ceil(total / perPage);

    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };

  const handleFind = async () => {
    try {
      const result = await ProductService.paginate(
        currentPage,
        perPage,
        selectedCategory,
        selectedBrand,
        selectedPrice
      );
      const paginatedProducts = result.products;
      const productSalesResult = await ProductSaleService.index();
      const productSales = productSalesResult.products;

      const priceSaleMap = {};
      productSales.forEach((productSale) => {
        priceSaleMap[productSale.product_id] = productSale.pricesale;
      });

      const updatedProducts = paginatedProducts.map((product) => ({
        ...product,
        pricesale: priceSaleMap[product.id] || product.price,
      }));

      const filteredProducts = updatedProducts.filter((product) => {
        const categoryMatch =
          !selectedCategory ||
          product.category_id === parseInt(selectedCategory, 10);
        const brandMatch =
          !selectedBrand || product.brand_id === parseInt(selectedBrand, 10);
        const priceMatch =
          !selectedPrice ||
          (selectedPrice === "1" && product.pricesale < 2000000) ||
          (selectedPrice === "2" &&
            product.pricesale >= 2000000 &&
            product.pricesale <= 5000000) ||
          (selectedPrice === "3" &&
            product.pricesale >= 5000000 &&
            product.pricesale <= 10000000) ||
          (selectedPrice === "4" &&
            product.pricesale >= 10000000 &&
            product.pricesale <= 20000000) ||
          (selectedPrice === "5" &&
            product.pricesale >= 20000000 &&
            product.pricesale <= 30000000) ||
          (selectedPrice === "6" && product.pricesale > 30000000);

        return categoryMatch && brandMatch && priceMatch;
      });

      // Set the filtered products
      setShowPagination(false);
      setProducts(filteredProducts);
      setTotal(result.total);
    } catch (error) {
      console.error("Error fetching or updating products:", error);
    }
  };

  const handlePageChange = (page) => {
    console.log(`Changing to page ${page}`);
    setCurrentPage(page);
    setReLoad(reload + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleDisplayFormatChange = (value) => {
    setDisplayFormat(value);
  };
  return (
    <section className="section-content padding-y">
      <div className="container">
        <div
          className="column"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ marginRight: 10 }}>Thanh lọc:</div>
          <select
            style={{ marginRight: 10 }}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="">Giá</option>
            <option value="1">Dưới 2 triệu </option>
            <option value="2">Từ 2-5 triệu </option>
            <option value="3">Từ 5-10 triệu </option>
            <option value="4">Từ 10-20 triệu </option>
            <option value="5">Từ 20-30 triệu </option>
            <option value="6">Trên 30 triệu </option>
          </select>
          <select
            style={{ marginRight: 10 }}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            style={{ marginRight: 10 }}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">Tất cả thương hiệu</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          <select
            style={{ marginRight: 10 }}
            onChange={(e) => handleDisplayFormatChange(e.target.value)}
          >
            <option value="grid">Hiển thị lưới</option>
            <option value="list">Hiển thị danh sách</option>
          </select>
          <button onClick={handleFind}>Lọc</button>
        </div>
        <div className="row">
          <div className={displayFormat === "grid" ? "row" : "list-style"}>
            {products.map((product) => (
              <div
                key={product.id}
                className={
                  displayFormat === "grid"
                    ? "col-xl-2 col-lg-3 col-md-4 col-6"
                    : "list-item"
                }
                style={{ marginTop: 15 }}
              >
                <div className="border-name">
                  <Link to={`/product/${product.slug}`} className="border">
                    <div className="products-image">
                      <img
                        className="product-images"
                        src={urlImage + "product/" + product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className="boder-productname">{product.name}</div>
                    <div className="boder-productprice">
                      {product.pricesale}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showPagination && renderPagination()}
      </div>
    </section>
  );
};

export default Productt;
