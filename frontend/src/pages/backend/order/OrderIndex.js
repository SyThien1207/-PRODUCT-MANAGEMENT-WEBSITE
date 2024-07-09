import React, { useEffect, useState } from "react";

import LoadingSpinner from "../../../LoadingSpinner";
import OrderService from "../../../services/OrderService";

export default function OrderIndex() {
  const [orders, setorders] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [delivery_name, setDeliveryName] = useState("");
  const [delivery_gender, setDeliveryGender] = useState("");
  const [delivery_email, setDeliveryEmail] = useState("");
  const [delivery_phone, setDeliveryPhone] = useState("");
  const [delivery_address, setDeliveryAddress] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(1);

  useEffect(() => {
    (async () => {
      setLoad(false);
      const result = await OrderService.index();
      setorders(result.orders);
      setLoad(false);
    })();
  }, [reload]);

    const handleDelete = async (id) => {
      if (window.confirm("Are you sure you want to delete this order ?")) {
        try {
          const result = await OrderService.destroy(id);
          alert(result.message);
          setReLoad(result.id);
        } catch (error) {
          console.error("Error deleting order:", error);
        }
      }
    };
    const handleStatus = async (id, currentStatus) => {
      if (
        window.confirm(
          "Are you sure you want to change the status of this order?"
        )
      ) {
        try {
          const newStatus = currentStatus === 1 ? 2 : 1;
          const updatedData = { status: newStatus };
          const result = await OrderService.update(updatedData, id);
          alert(result.message);
          setorders((orders) =>
            orders.map((order) =>
              order.id === id ? { ...order, status: newStatus } : order
            )
          );
        } catch (error) {
          console.error("Error updating product status:", error);
        }
      }
    };

  return (
    <div>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              {/*CONTENT  */}
              <div className="content">
                <section className="content-header my-2">
                  <h1 className="d-inline">Quản lý đơn hàng</h1>
                  <div className="row mt-3 align-items-center">
                    <div className="col-6">
                      <ul className="manager">
                        <li>
                          <a href="#">Tất cả (123)</a>
                        </li>
                        <li>
                          <a href="#">Xuất bản (12)</a>
                        </li>
                        <li>
                          <a href="#">Rác (12)</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 text-end">
                      <input type="text" className="search d-inline" />
                      <button className="d-inline btnsearch">Tìm kiếm</button>
                    </div>
                  </div>
                  <div className="row mt-1 align-items-center">
                    <div className="col-md-8">
                      <select name className="d-inline me-1">
                        <option value>Hành động</option>
                        <option value>Bỏ vào thùng rác</option>
                      </select>
                      <button className="btnapply">Áp dụng</button>
                      <select name className="d-inline me-1">
                        <option value>Chọn tháng</option>
                        <option value>Tháng 9</option>
                      </select>
                      <select name className="d-inline me-1">
                        <option value>Chọn năm</option>
                      </select>
                      <button className="btnfilter">Lọc</button>
                    </div>
                    <div className="col-md-4 text-end">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination pagination-sm justify-content-end">
                          <li className="page-item disabled">
                            <a className="page-link">«</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              »
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </section>
                {load ? <LoadingSpinner /> : ""}
                <section className="content-body my-2">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center" style={{ width: 30 }}>
                          <input type="checkbox" id="checkboxAll" />
                        </th>
                        <th>Họ tên khách hàng</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th className="text-center" style={{ width: 30 }}>
                          ID
                        </th>
                        <th className="text-center" style={{ width: 30 }}>
                         Trạng thái
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders &&
                        orders.map((order, index) => {
                          return (
                            <tr className="datarow" key={index}>
                              <td>
                                <input type="checkbox" id="checkId" />
                              </td>
                              <td>
                                <div className="name">
                                  <a href="order_show.html">
                                    {order.delivery_name}
                                  </a>
                                </div>
                                <div className="function_style">
                                  <a
                                    href="#st"
                                    className="px-1 text-success"
                                    onClick={() =>
                                      handleStatus(order.id, order.status)
                                    }
                                  >
                                    <i className="fa fa-toggle-on" />
                                  </a>
                                  <a
                                    href="order_edit.html"
                                    className="text-primary mx-1"
                                  >
                                    <i className="fa fa-edit" />
                                  </a>
                                  <a
                                    href="order_show.html"
                                    className="text-info mx-1"
                                  >
                                    <i className="fa fa-eye" />
                                  </a>
                                  <a
                                    href="#st"
                                    className="px-1 text-danger"
                                    onClick={() => handleDelete(order.id)}
                                  >
                                    <i className="fa fa-trash" />
                                  </a>
                                </div>
                              </td>
                              <td>{order.delivery_phone}</td>
                              <td>{order.delivery_email}</td>
                              <td>{order.delivery_address}</td>
                              <td className="text-center">{order.id}</td>
                              <td>{order.status}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </section>
              </div>

              {/*END CONTENT*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
