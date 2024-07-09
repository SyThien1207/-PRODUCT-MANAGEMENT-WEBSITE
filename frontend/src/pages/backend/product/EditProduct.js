import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [sort_order, setSortOrder] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductService.show(id);
        const product = result.product;
        const brandResult = await BrandService.index();
        setBrands(brandResult.brands);
        const categoryResult = await CategoryService.index();
        setCategories(categoryResult.categories);
        setName(product.name);
        setSlug(product.slug);
        setDescription(product.description);
        setDetail(product.detail);
        setBrand_id(product.brand_id);
        setCategory_id(product.category_id);
        setSortOrder(product.sort_order);
        setStatus(product.status);
        setPrice(product.price);
        setImage(product.image);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);
  const handleSubmit = async () => {
    try {
      const data = {
        name,
        slug,
        description,
        detail,
        brand_id,
        category_id,
        price,
        image,
        sort_order,
        status,
      };
      const result = await ProductService.update(data, id);
      alert(result.message);
      navigate("/admin/product/index");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <section className="hdl-content">
      <div className="container-fluid">
        <section className="content-header my-2">
          <h1 className="d-inline">Cập nhật sản phẩm</h1>
          <div className="mt-1 text-end">
            <a className="btn btn-sm btn-primary" href="/admin/product/index">
              <i className="fa fa-arrow-left" /> Về danh sách
            </a>
          </div>
        </section>
        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên sản phẩm (*)</strong>
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Chi tiết (*)</strong>
                </label>
                <textarea
                  name="detail"
                  placeholder="Nhập chi tiết sản phẩm"
                  rows={7}
                  className="form-control"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Nhập mô tả"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Đăng</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    className="form-control"
                  >
                    <option value={1}>Xuất bản</option>
                    <option value={2}>Chưa xuất bản</option>
                  </select>
                </div>
                <div className="box-footer text-end px-2 py-2">
                  <button
                    type="button"
                    className="btn btn-success btn-sm text-end"
                    onClick={handleSubmit}
                  >
                    <i className="fa fa-save" aria-hidden="true" /> Đăng
                  </button>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Danh mục(*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    name="category_id"
                    value={category_id}
                    onChange={(e) => setCategory_id(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Chọn danh mục</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Thương hiệu(*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    name="brand_id"
                    value={brand_id}
                    onChange={(e) => setBrand_id(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Chọn thương hiệu</option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Giá và số lượng</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <div className="mb-3">
                    <label>
                      <strong>Giá bán ()</strong>
                    </label>
                    <input
                      type="number"
                      value={price}
                      min={0}
                      name="price"
                      className="form-control"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình đại diện()</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="form-control"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log("Selected Image:", file);
                      setImage(file);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EditProduct;
