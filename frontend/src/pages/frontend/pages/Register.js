import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import UserService from "../../../services/UserService";

const Register = () => {
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

  const [roles, setRoles] = useState(1);
  const [status, setStatus] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== rePassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp");
        return;
      }

      const user = new FormData();
      user.append("created_by", created_by);
      user.append("username", username);
      user.append("password", password);
      user.append("re_password", rePassword);
      user.append("email", email);
      user.append("phone", phone);
      user.append("name", name);
      user.append("gender", gender);
      user.append("roles", roles);
      user.append("status", status);

      const result = await UserService.store(user);
      alert(result.message);

      // Kiểm tra nếu đăng ký thành công thì chuyển hướng về trang Register
      if (result.success) {
        navigate("/login"); // Chuyển hướng đến trang đăng nhập, bạn có thể thay đổi đường dẫn tùy ý
      }

      setReLoad(result.user.id);
    } catch (error) {
      console.error("Lỗi khi gửi biểu mẫu:", error);
    }
  };

  return (
    <>
      <Headers />
      <Menu />
      <section className="bg-light">
        <div className="container">
          <nav style={{ breadcrumbDivider: ">" }} aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Đăng ký
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <form action="register.html" method="post" name="registercustomer">
          <div className="container">
            <h1 className="fs-2 text-main text-center">ĐĂNG KÝ TÀI KHOẢN</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="text-main">
                    Họ tên(*)
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="nhập họ tên"
                    onChange={(e) => setName(e.target.value)}                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="text-main">
                    Điện thoại(*)
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Nhập điện thoại"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                  <div className="card">
                    <div className="card-header text-main">Địa chỉ</div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="form-control"
                          placeholder="Nhập địa chỉ"
                        />
                      </div>
                      <div className="row">
                        <div className="col-4">
                         
                        </div>
                      
                       
                      </div>
                    </div>
                  </div>
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
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="username" className="text-main">
                    Tên tài khoản(*)
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Nhập tài khoản đăng nhập"
                    onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="text-main">
                    Email(*)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Nhập email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="text-main">
                    Mật khẩu(*)
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                  <label htmlFor="password_re" className="text-main">
                    Xác nhận Mật khẩu(*)
                  </label>
                  <input
                    type="password"
                    name="password_re"
                    id="password_re"
                    className="form-control"
                    placeholder="Xác nhận mật khẩu"
                    onChange={(e) => setRePassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                  <button className="btn btn-main" name="REGISTER"
                  onClick={handleSubmit}
                  >
                     <i className="fa fa-save"></i>
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      {/* End content */}
      <Footer />
      <EndFooter />
    </>
  );
};

export default Register;
