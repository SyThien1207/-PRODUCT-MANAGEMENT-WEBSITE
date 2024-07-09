import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerService from "../../../services/BannerService";

const BannerCreate = () => {
  const navigate = useNavigate();
  const [created_by] = useState("1");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState(1);
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    try {
      const banner = new FormData();
      banner.append("created_by", created_by);
      banner.append("name", name);
      banner.append("link", link);
      banner.append("description", description);
      banner.append("position", position);
      banner.append("status", status);
      banner.append("image", image);

      const result = await BannerService.store(banner);
      alert(result.message);
      
      // Chuyển hướng với dữ liệu mới
      navigate("/admin/banner/index", {
        replace: true,
        state: { bannerData: result.data },
      });
    } catch (error) {
      console.error("Lỗi khi gửi form:", error);
    }
  };

  return (
    <div>
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Thêm banner</h1>
          <div className="text-end">
            <a href="banner_index.html" className="btn btn-sm btn-success">
              <i className="fa fa-arrow-left"></i> Về danh sách
            </a>
          </div>
        </section>
        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên banner (*)</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nhập tên banner"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Liên kết</strong>
                </label>
                <input
                  type="text"
                  name="link"
                  className="form-control"
                  placeholder="Nhập liên kết"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  name="description"
                  rows="5"
                  className="form-control"
                  placeholder="Nhập mô tả"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
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
              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Vị trí (*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    name="position"
                    id="position"
                    className="form-select"
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <option value="">Chọn vị trí</option>
                    <option value="slideshow">Slide Show</option>
                    <option value="ads">Quảng cáo</option>
                  </select>
                  <p className="pt-2">Vị trí hiển thị banner</p>
                </div>
              </div>
              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình (*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <input
                    type="file"
                    name="image"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BannerCreate;