import React, { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { urlImage } from "../../../config";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";

export default function CategoryIndex() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReLoad] = useState(0);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sort_order, setSortOrder] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await CategoryService.index();

        setCategories(result.categories);
      } catch (error) {
        console.error("Error fetching categorys:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reload]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = document.getElementById("image");
    const categories = new FormData();
    categories.append("name", name);
    categories.append("description", description);
    categories.append("sort_order", sort_order);
    categories.append("status", status);
    categories.append("image", image);
    categories.append(
      "image",
      image.isDefaultNamespace.length === 0 ? "" : image.files[0]
    );

    const addCategory = async () => {
      try {
        const result = await CategoryService.store(categories);
        alert(result.message);
        setReLoad(result.categories.id);
      } catch (error) {
        console.error("Error adding categories:", error);
      } finally {
        setReLoad(!reload);
      }
    };
    addCategory();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn muốn xóa chứ?")) {
      try {
        const result = await CategoryService.destroy(id);
        alert(result.message);
        setReLoad(result.categories.id);
      } catch (error) {
        console.error("Lỗi xóa thương hiệu:", error);
      } finally {
        setReLoad(!reload);
      }
    }
  };
  const handleToggleStatus = async (id, currentStatus) => {
    try {
      const result = await CategoryService.status(id);
      alert(result.message);

      // Toggle the status locally
      const updatedCategories = categories.map((category) =>
        category.id === id
          ? { ...category, status: result.category.status }
          : category
      );
      setCategories(updatedCategories);

      // Update the reload state to trigger a re-render
    } catch (error) {
      console.error("Lỗi chuyển đổi trạng thái danh mục:", error);
    } finally {
      setReLoad(!reload);
    }
  };

  return (
    <div class="col-md-10">
      <div class="content">
        <section class="content-header my-2">
          <h1 class="d-inline">Danh mục</h1>
          <hr style={{ border: "none" }} />
        </section>
        <section class="content-body my-2">
          <div class="row">
            <div class="col-md-4">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label>
                    <strong>Tên danh mục (*)</strong>
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
                <div class="mb-3">
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
                {/* <div class="mb-3">
                                    <label><strong>Danh mục cha</strong></label>
                                    <select name="parent_id" class="form-select">
                                        <option value="0">None</option>
                                        <option value="1">Tên danh mục</option>
                                    </select>
                                </div> */}
                <div class="mb-3">
                  <label>
                    <strong>Hình đại diện</strong>
                  </label>
                  <input type="file" id="image" className="form-control" />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Sắp xếp</strong>
                  </label>
                  <select
                    onChange={(e) => setSortOrder(e.target.value)}
                    value={sort_order}
                    className="form-select"
                  >
                    <option value={1}>Trước</option>
                    <option value={2}>Sau</option>
                  </select>
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
                <div class="mb-3 text-end">
                  <button type="submit" className="btn btn-success" name="THEM">
                    <i class="fa fa-save"></i> Lưu[Thêm]
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-8">
              <div class="row mt-3 align-items-center">
                <div class="col-12">
                  <ul class="manager">
                    <li>
                      <a href="category_index.html">Tất cả (123)</a>
                    </li>
                    <li>
                      <a href="#st">Xuất bản (12)</a>
                    </li>
                    <li>
                      <a href="category_trash.html">Rác (12)</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row my-2 align-items-center">
                <div class="col-md-6">
                  <select name="" class="d-inline me-1">
                    <option value="">Hành động</option>
                    <option value="">Bỏ vào thùng rác</option>
                  </select>
                  <button class="btnapply">Áp dụng</button>
                </div>
                <div class="col-md-6 text-end">
                  <input type="text" class="search d-inline" />
                  <button class="d-inline btnsearch">Tìm kiếm</button>
                </div>
              </div>
              {loading ? <LoadingSpinner /> : ""}
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="text-center" style={{ width: "30px" }}>
                      <input type="checkbox" id="checkboxAll" />
                    </th>
                    <th class="text-center" style={{ width: "90px" }}>
                      Hình ảnh
                    </th>
                    <th>Tên danh mục</th>
                    <th>Tên slug</th>
                    <th class="text-center" style={{ width: "30px" }}>
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    categories.map((category, index) => (
                      <tr class="datarow" key={index}>
                        <td class="text-center">
                          <input type="checkbox" id="checkId" />
                        </td>
                        <td>
                          <img
                            className="img-fluid"
                            src={urlImage + "category/" + category.image}
                            alt={category.image}
                          />
                        </td>
                        <td>
                          <div class="name">
                            <Link to={`/admin/category/edit/${category.id}`}>
                              {category.name}
                            </Link>
                          </div>
                          <div class="function_style">
                            <Link
                              to={`/admin/category/index`}
                              className={`px-1 text-${
                                category.status === 1 ? "success" : "danger"
                              }`}
                              onClick={() =>
                                handleToggleStatus(category.id, category.status)
                              }
                            >
                              {category.status === 1 ? (
                                <i class="fa fa-toggle-on"></i>
                              ) : (
                                <i class="fa fa-toggle-off"></i>
                              )}
                            </Link>

                            <Link
                              to={`/admin/category/edit/${category.id}`}
                              class="px-1 text-primary"
                            >
                              <i class="fa fa-edit"></i>
                            </Link>
                            <Link
                              to={`/admin/category/show/${category.id}`}
                              class="px-1 text-info"
                            >
                              <i class="fa fa-eye"></i>
                            </Link>
                            <Link
                              to={`/admin/category/index`}
                              class="px-1 text-danger"
                              onClick={() => handleDelete(category.id)}
                            >
                              <i class="fa fa-trash"></i>
                            </Link>
                          </div>
                        </td>
                        <td>{category.slug}</td>
                        <td class="text-center">{category.id}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
