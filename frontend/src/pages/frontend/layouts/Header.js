import React from "react";
const Headers = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-2 py-1">
              <a href="/">
                <img
                  className="img-fluid"
                  src={require("../public/images/logo.png")}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="col-12 col-sm-9 d-none d-md-block col-md-5 py-3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập nội dung tìm kiếm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text"
                  id="basic-addon2"
                  style={{ backgroundColor: "#FF0099" }}
                >
                  <i
                    className="fa fa-search"
                  />
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-12 d-none d-md-block col-md-4 text-center py-2">
              <div className="call-login--register border-bottom">
                <ul className="nav nav-fills py-0 my-0">
                  <li className="nav-item">
                    <a className="nav-link" href="login.html">
                      <i className="fa fa-phone-square" aria-hidden="true" />
                      0987654321
                    </a>
                  </li>
                  <li className="nav-item" fontsize ="12px">
                    <a className="nav-link" href="/login">
                      Đăng nhập
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="register">
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
              <div className="fs-6 py-2">
                ĐỔI TRẢ HÀNG HOẶC HOÀN TIỀN{" "}
                <span className="text-main">TRONG 3 NGÀY</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-1 text-end py-4 py-md-2">
              <a href="/cart">
                <div className="box-cart float-end">
                  <i className="fa fa-shopping-bag" aria-hidden="true" />
                  <span>1</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
