import React from "react";

const CartShow = () => {
  return (
    <>
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
                Giỏ hàng của bạn
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* //Product */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <table className="table table-bordered">
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
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center align-middle">1</td>
                <td>
                  <img
                    className="img-fluid"
                    src={require("../../public/images/product/thoi-trang-nam-1.jpg")}
                    alt=""
                  />
                </td>
                <td className="align-middle">Tên sản phẩm</td>
                <td className="text-center align-middle">1000000</td>
                <td className="text-center align-middle">
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="sub"
                      onclick="changenumber(id)"
                    >
                      -
                    </span>
                    <input
                      type="text"
                      defaultValue={1}
                      id="qty"
                      className="form-control text-center"
                    />
                    <span
                      className="input-group-text"
                      id="add"
                      onclick="changenumber(id)"
                    >
                      +
                    </span>
                  </div>
                </td>
                <td className="text-center align-middle">12900000</td>
                <td className="text-center align-middle">
                  <button className="btn btn-sm btn-main">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle">3</td>
                <td>
                  <img
                    className="img-fluid"
                    src={require("../../public/images/product/thoi-trang-nam-1.jpg")}
                    alt=""
                  />
                </td>
                <td className="align-middle">Tên sản phẩm</td>
                <td className="text-center align-middle">1000000</td>
                <td className="text-center align-middle">
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="sub"
                      onclick="changenumber(id)"
                    >
                      -
                    </span>
                    <input
                      type="text"
                      defaultValue={1}
                      id="qty"
                      className="form-control text-center"
                    />
                    <span
                      className="input-group-text"
                      id="add"
                      onclick="changenumber(id)"
                    >
                      +
                    </span>
                  </div>
                </td>
                <td className="text-center align-middle">12900000</td>
                <td className="text-center align-middle">
                  <button className="btn btn-sm btn-main">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-center align-middle">3</td>
                <td>
                  <img
                    className="img-fluid"
                    src={require("../../public/images/product/thoi-trang-nam-1.jpg")}
                    alt=""
                  />
                </td>
                <td className="align-middle">Tên sản phẩm</td>
                <td className="text-center align-middle">1000000</td>
                <td className="text-center align-middle">
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="sub"
                      onclick="changenumber(id)"
                    >
                      -
                    </span>
                    <input
                      type="text"
                      defaultValue={1}
                      id="qty"
                      className="form-control text-center"
                    />
                    <span
                      className="input-group-text"
                      id="add"
                      onclick="changenumber(id)"
                    >
                      +
                    </span>
                  </div>
                </td>
                <td className="text-center align-middle">12900000</td>
                <td className="text-center align-middle">
                  <button className="btn btn-sm btn-main">
                    <i className="fa-solid fa-xmark" />
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
                  <button className="btn btn-main">Cập nhật</button>
                  <a href="/checkout" className="btn btn-main">
                    Thanh toán
                  </a>
                </td>
                <td colSpan={2} className="text-end">
                  <strong>Tổng tiền: 123</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default CartShow;
