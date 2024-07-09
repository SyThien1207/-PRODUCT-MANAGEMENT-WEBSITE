import React, { useState } from "react";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";

const Checkout = () => {
  const [paymentType, setPaymentType] = useState(1);

  const showBankInfo = (value) => {
    setPaymentType(value);
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
                Thanh toán
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            {/* Shipping Information Form */}
            <div className="col-md-6">
              <h2 className="fs-5 text-main">Thông tin giao hàng</h2>
              <p>
                Bạn có tài khoản chưa? <a href="login.html">Đăng nhập</a>
              </p>
              <div className="mb-3">
                <label htmlFor="name">Họ tên</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Nhập họ tên"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Nhập điện thoại"
                />
              </div>
              <div className="card">
                <div className="card-header text-main">Địa chỉ nhận hàng</div>
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
                      <select
                        name="tinhtp"
                        id="tinhtp"
                        className="form-control"
                      >
                        <option value="">Chọn Tỉnh/TP</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select
                        name="quanhuyen"
                        id="quanhuyen"
                        className="form-control"
                      >
                        <option value="">Chọn Quận/Huyện</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select
                        name="phuongxa"
                        id="phuongxa"
                        className="form-control"
                      >
                        <option value="">Chọn Phường/Xã</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="fs-6 text-main mt-4">Phương thức thanh toán</h4>
              <div className="thanhtoan mb-4">
                <div className="p-4 border">
                  <input
                    name="typecheckout"
                    onChange={() => showBankInfo(1)}
                    type="radio"
                    value="1"
                    id="check1"
                  />
                  <label htmlFor="check1">Thanh toán khi giao hàng</label>
                </div>
                <div className="p-4 border">
                  <input
                    name="typecheckout"
                    onChange={() => showBankInfo(2)}
                    type="radio"
                    value="2"
                    id="check2"
                  />
                  <label htmlFor="check2">Chuyển khoản qua ngân hàng</label>
                </div>
                {paymentType === 2 && (
                  <div className="p-4 border bankinfo">
                    <p>Ngân Hàng Vietcombank </p>
                    <p>STK: 99999999999999</p>
                    <p>Chủ tài khoản: Hồ Diên Lợi</p>
                  </div>
                )}
                <div class="p-4 border bankinfo">
                  <p>Ngân Hàng Vietcombank </p>
                  <p>STK: 99999999999999</p>
                  <p>Chủ tài khoản: Hồ Diên Lợi</p>
                </div>
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-main px-4">
                  XÁC NHẬN
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="fs-5 text-main">Thông tin đơn hàng</h2>
              <table className="table table-borderless">
                <thead>
                  <tr className="bg-dark">
                    <th style={{ width: 30 }} className="text-center">
                      STT
                    </th>
                    <th style={{ width: 100 }}>Hình</th>
                    <th>Tên sản phẩm</th>
                    <th className="text-center">Giá</th>
                    <th style={{ width: 130 }} className="text-center">
                      Số lượng
                    </th>
                    <th className="text-center">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center align-middle">1</td>
                    <td>
                      <img
                        className="img-fluid"
                        src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                        alt=""
                      />
                    </td>
                    <td className="align-middle">Tên sản phẩm</td>
                    <td className="text-center align-middle">1000000</td>
                    <td className="text-center align-middle">1</td>
                    <td className="text-center align-middle">12900000</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">3</td>
                    <td>
                      <img
                        className="img-fluid"
                        src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                        alt=""
                      />
                    </td>
                    <td className="align-middle">Tên sản phẩm</td>
                    <td className="text-center align-middle">1000000</td>
                    <td className="text-center align-middle">1</td>
                    <td className="text-center align-middle">12900000</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">3</td>
                    <td>
                      <img
                        className="img-fluid"
                        src={require("../public/images/product/thoi-trang-nam-1.jpg")}
                        alt=""
                      />
                    </td>
                    <td className="align-middle">Tên sản phẩm</td>
                    <td className="text-center align-middle">1000000</td>
                    <td className="text-center align-middle">11</td>
                    <td className="text-center align-middle">12900000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={6} className="text-end">
                      <strong>Tổng: 199900090</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mã giảm giá"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    Sử dụng
                  </span>
                </div>
              </div>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th>Tạm tính</th>
                    <td className="text-end">199900090</td>
                  </tr>
                  <tr>
                    <th>Phí vận chuyển</th>
                    <td className="text-end">0</td>
                  </tr>
                  <tr>
                    <th>Giảm giá</th>
                    <td className="text-end">0</td>
                  </tr>
                  <tr>
                    <th>Tổng cộng</th>
                    <td className="text-end">199900090</td>
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

export default Checkout;
