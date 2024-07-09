import React, { useState } from "react";
import UserService from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const navigate = useNavigate();
  const [created_by] = useState("1");
  const [reload, setReLoad] = useState(0);

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState(0);
    const [reEmail, setReEmail] = useState("");

  const [roles, setRoles] = useState(1);
  const [status, setStatus] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      try {
        if (password !== rePassword) {
            alert("Mật khẩu và xác nhận mật khẩu không khớp");
            return;
          }
          if (email !== reEmail) {
            alert("Mật khẩu và xác nhận mật khẩu không khớp");
            return;
          }
      const user = new FormData();
      user.append("created_by", created_by);
      user.append("username", username);
      user.append("password", password);
      user.append("re_password", rePassword);
      user.append("email", email);
      user.append("re_email", reEmail);
      user.append("phone", phone);
      user.append("name", name);
      user.append("gender", gender);
      user.append("roles", roles);
      user.append("status", status);
  
      // Gửi user đến UserService.create
      const result = await UserService.store(user);
      alert(result.message);
      setReLoad(result.user.id);
    } catch (error) {
      console.error("Lỗi khi gửi biểu mẫu:", error);
    }
  };
  

  return (
    <div>
      <section className="content-header my-2">
              <div className="content">
                  
          <section className="content-header my-2">
                      <h1 className="d-inline">Thêm thành viên</h1>
                      
                      <div className="row mt-2 align-items-center">
                          
              <div className="col-md-12 text-end">
                <button
                  className="btn btn-success btn-sm"
                  name="THEM"
                  onClick={handleSubmit}
                >
                  <i className="fa fa-save"></i> Lưu [Thêm]
                </button>
                <a href="/admin/user/index" className="btn btn-primary btn-sm">
                  <i className="fa fa-arrow-left"></i> Về danh sách
                </a>
              </div>
            </div>
          </section>
          <section className="content-body my-2">
            <form
              action=""
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label>
                      <strong>Tên đăng nhập(*)</strong>
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Tên đăng nhập"
                      onChange={(e) => setUserName(e.target.value)}

                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Mật khẩu(*)</strong>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Mật khẩu"
                      onChange={(e) => setPassword(e.target.value)}

                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Xác nhận mật khẩu(*)</strong>
                    </label>
                    <input
                      type="password"
                      name="re_password"
                      className="form-control"
                      placeholder="Xác nhận mật khẩu"
                      onChange={(e) => setRePassword(e.target.value)}

                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Email(*)</strong>
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}

                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Xác nhận email(*)</strong>
                    </label>
                    <input
                      type="text"
                      name="re_email"
                      className="form-control"
                      placeholder="Xác nhận email"
                      onChange={(e) => setReEmail(e.target.value)}

                    />
                  </div>
                 
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label>
                      <strong>Họ tên (*)</strong>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Họ tên"
                      onChange={(e) => setName(e.target.value)}

                    />
                                  </div>
                                  <div className="mb-3">
                    <label>
                      <strong>Điện thoại(*)</strong>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Điện thoại"
                      onChange={(e) => setPhone(e.target.value)}

                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Giới tính</strong>
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      className="form-select"
                      onChange={(e) => setGender(e.target.value)}

                    >
                      <option>Chọn giới tính</option>
                        <option >Nam</option>
                        <option >Nữ</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Vai trò</strong>
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      className="form-select"
                      onChange={(e) => setRoles(e.target.value)}

                    >
                      <option>chọn vai trò</option>
                        <option >Quản lý</option>
                        <option >Nhân viên</option>
                        <option >Thành viên</option>
                    </select>
                  </div>
                  <div className="mb-3">
                 
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Trạng thái</strong>
                    </label>
                    <select
                      name="status"
                      className="form-select"
                      onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    >
                      <option value={1}>Xuất bản</option>
                        <option value={2}>Chưa xuất bản</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default UserCreate;
