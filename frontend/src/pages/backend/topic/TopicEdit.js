import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import TopicService from "../../../services/TopicService";

export default function TopicEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sort_order, setSortOrder] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      const response = await TopicService.show(id);
      console.log("🚀 ~ file: BrandEdit.jsx:16 ~ fetch ~ response:", response);
      const topic = response.topic;
      setName(topic.name);
      setSortOrder(topic.sort_order);
      setDescription(topic.description);
      setStatus(topic.status);
    };
    fetch();
  }, [id]);
  const handleSubmit = async () => {
    try {
      const data = {
        name,
        description,
        sort_order,
        status,
      };
      const result = await TopicService.update(data, id);
      alert(result.message);
      navigate("/admin/topic/index");
    } catch (error) {
      console.error("Error updating topic:", error);
    }
  };

  return (
    <div>
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Cập nhật chủ đề</h1>
          <div className="text-end">
            <Link
              className="btn btn-sm btn-primary"
              style={{ color: "white" }}
              to="/admin/topic/index"
            >
              quay về
            </Link>
          </div>
        </section>
        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên chủ đề (*)</strong>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nhập tên chủ đề"
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
                  name="description"
                  rows={6}
                  className="form-control"
                  placeholder="Nhập mô tả"
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
              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Thứ tự</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    onChange={(e) => setSortOrder(e.target.value)}
                    value={sort_order}
                    name="sort_order"
                    className="form-select"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
