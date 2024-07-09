import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";
import { FaEdit, FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";
const ProductIndex = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState(1);
  const publishedProductsCount = products.filter(
    (product) => product.status === statusFilter
  ).length;

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
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const result = await ProductService.destroy(id);
        alert(result.message);
        setReLoad(result.id);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  const handleStatus = async (id, currentStatus) => {
    if (
      window.confirm(
        "Are you sure you want to change the status of this product?"
      )
    ) {
      try {
        const newStatus = currentStatus === 1 ? 2 : 1;
        const updatedData = { status: newStatus };
        const result = await ProductService.update(updatedData, id);
        alert(result.message);
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, status: newStatus } : product
          )
        );
      } catch (error) {
        console.error("Error updating product status:", error);
      }
    }
  };

  return (
    <div>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            {/*CONTENT  */}
            <div className="content">
              <section className="content-header my-2">
                <h1 className="d-inline">Thương hiệu</h1>
                <hr style={{ border: "none" }} />
              </section>
              <section className="content-body my-2">
                <div className="row mt-3 align-items-center">
                  <div className="col-12">
                    <ul className="manager">
                      <li>
                        <a href="#st">Tất cả ({total})</a>
                      </li>
                      <li>
                        <a href="#st">Xuất bản ({publishedProductsCount})</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row my-2 align-items-center">
                  <div className="col-md-6">
                    <select name className="d-inline me-1">
                      <option value>Hành động</option>
                      <option value>Bỏ vào thùng rác</option>
                    </select>
                    <button className="btnapply">Áp dụng</button>
                    <button
                      className="btnapply"
                      style={{
                        backgroundColor: "#28a745",
                        borderColor: "#28a745",
                        margin: "10px",
                      }}
                    >
                      <Link to="/admin/product/store" style={{ color: "#fff" }}>
                        Thêm sản phẩm
                      </Link>
                    </button>
                  </div>
                  <div className="col-md-6 text-end">
                    <input type="text" className="search d-inline" />
                    <button className="btnsearch d-inline">Tìm kiếm</button>
                  </div>
                </div>
                {load ? <LoadingSpinner /> : ""}
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center" style={{ width: 30 }}>
                        <input type="checkbox" id="checkboxAll" />
                      </th>
                      <th className="text-center" style={{ width: 30 }}>
                        ID
                      </th>
                      <th className="text-center" style={{ width: 90 }}>
                        Hình ảnh
                      </th>
                      <th>Tên sản phẩm</th>
                      <th>Slug</th>
                      <th>Chi tiết</th>
                      <th>Mô tả</th>
                      <th>Giá</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((product, index) => (
                        <tr className="datarow" key={index}>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">{product.id}</td>
                          <td>
                            <img
                              className="img-fluid"
                              src={urlImage + "product/" + product.image}
                              alt={product.image}
                            />
                          </td>

                          <td>
                            <div className="name">
                              <Link to={`/admin/product/edit/${product.id}`}>
                                {product.name}
                              </Link>
                            </div>
                            <div className="function_style">
                              <a
                                href="#st"
                                className="px-1 text-success"
                                onClick={() =>
                                  handleStatus(product.id, product.status)
                                }
                              >
                                {product.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </a>
                              <Link
                                to={`/admin/product/edit/${product.id}`}
                                className="px-1 text-primary"
                              >
                                <FaEdit />
                              </Link>
                              <a
                                href="#st"
                                className="px-1 text-danger"
                                onClick={() => handleDelete(product.id)}
                              >
                                <FaTrash />
                              </a>
                            </div>
                          </td>
                          <td>{product.slug}</td>
                          <td>{product.detail}</td>
                          <td>{product.description}</td>
                          <td>{product.price}</td>
                          <td>
                            {product.status === 1
                              ? "Xuất bản"
                              : "Chưa xuất bản"}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </section>
            </div>
            {/*END CONTENT*/}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductIndex;
