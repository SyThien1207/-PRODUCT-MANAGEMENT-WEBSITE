import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";

const CategoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [sort_order, setSortOrder] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CategoryService.show(id);
        const category = result.category;
        setName(category.name);
        setSlug(category.slug);
        setDescription(category.description);
        setSortOrder(category.sort_order);
        setStatus(category.status);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    try {
      const imageInput = document.getElementById("image");
      if (!imageInput.files.length) {
        alert("Please select an image.");
        return;
      }

      const categoryData = {
        name,
        slug,
        description,
        sort_order,
        status,
        image: imageInput.files[0],
      };

      const result = await CategoryService.update(categoryData, id);
      alert(result.message);
      navigate("/admin/category/index", { replace: true });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Cập nhật danh mục</h1>
        <div className="text-end">
          <Link to="/admin/category/index" className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left"></i> Về danh sách
          </Link>
        </div>
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-9">
            <div className="mb-3">
              <label>
                <strong>Tên danh mục (*)</strong>
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Slug</strong>
              </label>
              <input
                type="text"
                onChange={(e) => setSlug(e.target.value)}
                value={slug}
                className="form-control"
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
                className="form-control"
                placeholder="Mô tả"
              ></textarea>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box-container mt-4 bg-white">
              <div className="box-header py-1 px-2 border-bottom">
                <strong>Đăng</strong>
              </div>
              <div className="box-body p-2 border-bottom">
                <p>Chọn trạng thái đăng</p>
                <select
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  className="form-control"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="box-footer text-end px-2 py-3">
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
                <strong>Hình đại diện</strong>
              </div>
              <div className="box-body p-2 border-bottom">
                <input type="file" id="image" className="form-control" />
              </div>
            </div>
            <div className="box-container mt-2 bg-white">
              <div className="box-header py-1 px-2 border-bottom">
                <strong>Thứ tự</strong>
              </div>
              <div className="box-body p-2 border-bottom">
                <select
                  name="sort_order"
                  onChange={(e) => setSortOrder(e.target.value)}
                  value={sort_order}
                  className="form-control"
                >
                  <option value="">Sau</option>
                  <option value="2">Trước</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryEdit;
