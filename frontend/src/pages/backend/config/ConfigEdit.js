import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ConfigService from "../../../services/ConfigService";

const ConfigEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { configData } = location.state || {};
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zalo, setZalo] = useState("");
  const [facebook, setFacebook] = useState("");
  const [address, setAddress] = useState("");
  const [youtube, setYoutube] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [metakey, setMetakey] = useState("");
  const [status, setStatus] = useState(1);

  useEffect(() => {
    if (configData) {
      setAuthor(configData.author || "");
      setEmail(configData.email || "");
      setPhone(configData.phone || "");
      setZalo(configData.zalo || "");
      setFacebook(configData.facebook || "");
      setAddress(configData.address || "");
      setYoutube(configData.youtube || "");
      setMetadesc(configData.metadesc || "");
      setMetakey(configData.metakey || "");
      setStatus(configData.status || 1);
    }
  }, [configData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      author,
      email,
      phone,
      zalo,
      facebook,
      address,
      youtube,
      metadesc,
      metakey,
      status,
    };

    try {
      const result = await ConfigService.update(data, configData.id);
      console.log(result); // Kiểm tra kết quả từ ConfigService.update
      alert(result.message);
      navigate("/admin/config/index", { replace: true });
    } catch (error) {
      console.error("Lỗi khi cập nhật cấu hình:", error);
    }
  };

    return (
    <div>
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Sửa cấu hình website</h1>
        </section>
        <section className="content-body my-3">
          <form action="" method="post">
            <input type="hidden" name="id" value="" />
            <div className="mb-3">
              <label htmlFor="author">
                <strong>Tác giả(*)</strong>
              </label>
              <input
                type="text"
                name="author"
                value={author}
                id="author"
                className="form-control"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>  
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email(*)</strong>
              </label>
              <input
                type="text"
                name="email"
                value={email}
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">
                <strong>Điện thoại(*)</strong>
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                id="phone"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="zalo">
                <strong>Zalo(*)</strong>
              </label>
              <input
                type="text"
                name="zalo"
                value={zalo}
                id="zalo"
                className="form-control"
                onChange={(e) => setZalo(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="facebook">
                <strong>Facebook cá nhân(*)</strong>
              </label>
              <input
                type="text"
                name="facebook"
                value={facebook}
                id="facebook"
                className="form-control"
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address">
                <strong>Địa chỉ(*)</strong>
              </label>
              <input
                type="text"
                name="address"
                value={address}
                id="address"
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="youtube">
                <strong>Kênh Youtube(*)</strong>
              </label>
              <input
                type="text"
                name="youtube"
                value={youtube}
                id="youtube"
                onChange={(e) => setYoutube(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="metadesc">
                <strong>Mô tả seo(*)</strong>
              </label>
              <textarea
                name="metadesc"
                  id="metadesc"
                value={metadesc}
                  
                className="form-control"
                onChange={(e) => setMetadesc(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="metakey">
                <strong>Từ khoa seo(*)</strong>
              </label>
              <textarea
                name="metakey"
                  id="metakey"
                value={metakey}
                  
                className="form-control"
                onChange={(e) => setMetakey(e.target.value)}
              ></textarea>
            </div>
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
                    <option value={1}>Online</option>
                    <option value={2}>Offline</option>
                  </select>
                </div>
                <div className="box-footer text-end px-2 py-2">
                <button
  type="submit"
  className="btn btn-success btn-sm text-end"
  onClick={handleSubmit}
>
  <i className="fa fa-save" aria-hidden="true" /> Đăng
</button>
                </div>
              </div>
          </form>
        </section>
      </div>
    </div>
  );
};


export default ConfigEdit;
