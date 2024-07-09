import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostService from "../../../services/PostService";

export default function PostCreate() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");
  const [topic_id, setTopic_id] = useState(1);
  const [status, setStatus] = useState(1);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("topic_id", topic_id);
      formData.append("title", title);
      formData.append("detail", detail);
      formData.append("description", description);
      formData.append("type", type);
      formData.append("created_by", 1);
      formData.append("status", status);
      formData.append("image", image);
     
      const result = await PostService.store(formData);
      alert(result.message);
      navigate("/admin/post/index", { replace: true });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="content">
        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tiêu đề bài viết (*)</strong>
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Nhập tiêu đề"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Thêm type (*)</strong>
                </label>
                <input
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Nhập type"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Chi tiết (*)</strong>
                </label>
                <textarea
                  onChange={(e) => setDetail(e.target.value)}
                  value={detail}
                  name="detail"
                  rows={7}
                  className="form-control"
                  placeholder="Nhập chi tiết"
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  name="description"
                  rows={4}
                  className="form-control"
                  placeholder="Mô tả"
                  defaultValue={""}
                />
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
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    name="status"
                    className="form-select"
                  >
                    <option value={1}>Xuất bản</option>
                    <option value={2}>Chưa xuất bản</option>
                  </select>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Chủ đề (*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    name="topic_id"
                    className="form-select"
                    onChange={(e) => setTopic_id(e.target.value)}
                    value={topic_id}
                  >
                    <option value>None</option>
                    <option value={1}>Tên chủ đề</option>
                  </select>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình đại diện(*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
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
          </div>
        </section>
      </div>
    </div>
  );
}
