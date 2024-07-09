import React from "react";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";

const Profile = () => {
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
                Thông tin tài khoản
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3">
                  Thông tin tài khoản
                </li>
                <li className="list-group-item">
                  <a href="profile.html">Thông tin tài khoản</a>
                </li>
                <li className="list-group-item">
                  <a href="profile.html">Quản lý đơn hàng</a>
                </li>
                <li className="list-group-item">
                  <a href="profile_changepassword.html">Đổi mật khẩu</a>
                </li>
                <li className="list-group-item">
                  <a href="profile.html">Thời trang thể thao</a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 order-1 order-md-2">
              <h1 className="fs-2 text-main">Thông tin tài khoản</h1>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td style={{ width: "20%" }}>Tên tài khoản</td>
                    <td>Hồ Diên Lợi</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Tên đăng nhập</td>
                    <td>
                      hodienloi{" "}
                      <a href="profile_changepassword.html">Đổi mật khẩu</a>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Email</td>
                    <td>dienloisoft@gmail.com</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Điện thoại</td>
                    <td>0987654321</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%" }}>Địa chỉ</td>
                    <td>
                      Số 20 - Tăng Nhơn Phú - Phước Long B - Quận 9{" "}
                      <a href="profile_edit.html">Đổi địa chỉ</a>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default Profile;
