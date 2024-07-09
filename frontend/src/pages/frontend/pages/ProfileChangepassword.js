import React from "react";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";

const ProfileChangepassword = () => {
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
                Đổi mật khẩu
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="call-login--register border-bottom">
              <ul className="nav nav-fill py-0 my-0">
                <li className="nav-item">
                  <a className="nav-link" href="login.html">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    0987654321
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Đăng nhập
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Đăng ký
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Hồ Diên Lợi
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 order-1 order-md-2">
              <h1 className="fs-2 text-main">Thông tin tài khoản</h1>
              <form>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td style={{ width: "20%" }}>Mật khẩu cũ</td>
                      <td>
                        <input
                          type="password"
                          name="password_old"
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Mật khẩu</td>
                      <td>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Xác nhận mật khẩu</td>
                      <td>
                        <input
                          type="password"
                          name="password_re"
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <button
                          className="btn btn-main"
                          type="submit"
                          name="CHANGE_PASSWORD"
                        >
                          Đổi mật khẩu
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End content */}
      <Footer />
      <EndFooter />
    </>
  );
};

export default ProfileChangepassword;
