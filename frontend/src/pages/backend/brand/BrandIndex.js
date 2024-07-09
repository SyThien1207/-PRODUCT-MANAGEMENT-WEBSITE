  import React, { useEffect, useState } from "react";
  import "../../../assets/bootstrap/css/bootstrap.min.css";

  import BrandService from "../../../services/BrandService";
  import { urlImage } from "../../../config";
  import LoadingSpinner from "../../../LoadingSpinner";
  import { Link } from "react-router-dom";
  import {
    FaEdit,
    FaEye,
    FaToggleOn,
    FaTrash,
    FaToggleOff,
  } from "react-icons/fa";

  export default function BrandIndex() {
    const [brands, setBrands] = useState([]);
    const [load, setLoad] = useState(true);
    const [reload, setReLoad] = useState(0);
    const [total, setTotal] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [sort_order, setSortOrder] = useState(1);
    const [status, setStatus] = useState(1);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoad(true);
          const result = await BrandService.index();
          setBrands(result.brands);
          setTotal(result.total); // Set the total from the API response
          setLoad(false);
        } catch (error) {
          console.error("Error:", error);
          setLoad(false);
        }
      };

      fetchData();
    }, [reload]);

    //hàm thêm

    const handleSubmit = (e) => {
      e.preventDefault();
      const image = document.getElementById("image");
      const brand = new FormData();
      brand.append("name", name);
      brand.append("description", description);
      brand.append("sort_order", sort_order);
      brand.append("status", status);
      brand.append("image", image);
      brand.append(
        "image",
        image.isDefaultNamespace.length === 0 ? "" : image.files[0]
      );
      (async () => {
        const result = await BrandService.store(brand);
        alert(result.message);
        setReLoad(result.brand.id);
      })();
    };

    //xóa sản phẩm
    const handleDelete = async (id) => {
      if (window.confirm("Are you sure you want to delete this brand?")) {
        try {
          const result = await BrandService.destroy(id);
          alert(result.message);
          setReLoad(result.brand.id);
        } catch (error) {
          console.error("Error deleting brand:", error);
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
          const result = await BrandService.update(updatedData, id);
          alert(result.message);
          setBrands((prevProducts) =>
            prevProducts.map((brands) =>
              brands.id === id ? { ...brands, status: newStatus } : brands
            )
          );
        } catch (error) {
          console.error("Error updating brands status:", error);
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
                  <div className="row">
                    <div className="col-md-4">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label>
                            <strong>Tên thương hiệu (*)</strong>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Nhập tên danh mục"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label>
                            <strong>Mô tả</strong>
                          </label>
                          <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            rows="4"
                            placeholder="Mô tả"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label>
                            <strong>Hình đại diện</strong>
                          </label>
                          <input
                            type="file"
                            id="image"
                            className="form-control"
                          />
                        </div>

                        <div className="mb-3">
                          <label>
                            <strong>Trạng thái</strong>
                          </label>
                          <select
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            className="form-control"
                          >
                            <option value={1}>Xuất bản</option>
                            <option value={2}>Chưa xuất bản</option>
                          </select>
                        </div>
                        <div className="mb-3 text-end">
                          <button
                            type="submit"
                            className="btn btn-success"
                            name="THEM"
                          >
                            <i className="fa fa-save" /> Lưu[Thêm]
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-8">
                      <div className="row mt-3 align-items-center">
                        <div className="col-12">
                          <ul className="manager">
                            <li>
                              <a href="#st">Tất cả ({total})</a>
                            </li>
                            <li>
                              <a href="#st">Xuất bản (12)</a>
                            </li>
                            <li>
                              <a href="#st">Rác (12)</a>
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
                            <th>Tên thương hiệu</th>
                            <th>Tên slug</th>
                            <th>Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody>
                          {brands &&
                            brands.map((brand, index) => (
                              <tr className="datarow" key={index}>
                                <td className="text-center">
                                  <input type="checkbox" />
                                </td>
                                <td className="text-center">{brand.id}</td>
                                <td>
                                  <img
                                    className="img-fluid"
                                    src={urlImage + "brand/" + brand.image}
                                    alt={brand.image}
                                  />
                                </td>
                                <td>
                                  <div className="name">
                                    {/* Update the Link component to include the brand id */}
                                    <Link to={`/admin/brand/edit/${brand.id}`}>
                                      {brand.name}
                                    </Link>
                                  </div>
                                  <div className="function_style">
                                    <a
                                      href="#st"
                                      className="px-1 text-success"
                                      onClick={() =>
                                        handleStatus(brand.id, brand.status)
                                      }
                                    >
                                      {brand.status === 1 ? (
                                        <FaToggleOn />
                                      ) : (
                                        <FaToggleOff />
                                      )}
                                    </a>
                                    <Link
                                      to={`/admin/brand/edit/${brand.id}`}
                                      className="px-1 text-primary"
                                    >
                                      <FaEdit />
                                    </Link>
                                    <Link
                                      to={`/admin/brand/show/${brand.id}`}
                                      className="px-1 text-info"
                                    >
                                      <FaEye />
                                    </Link>
                                    <a
                                      href="#st"
                                      className="px-1 text-danger"
                                      onClick={() => handleDelete(brand.id)}
                                    >
                                      <FaTrash />
                                    </a>
                                  </div>
                                </td>
                                <td>{brand.slug}</td>
                                <td>
                                  {brand.status === 1
                                    ? "Xuất bản"
                                    : "Chưa xuất bản"}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
              {/*END CONTENT*/}
            </div>
          </div>
        </section>
      </div>
    );
  }
