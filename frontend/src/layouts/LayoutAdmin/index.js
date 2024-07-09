import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../assets/bootstrap/css/bootstrap.min.css';

import './LayoutAdminStyle.css';
import { FaPlus, FaProductHunt } from 'react-icons/fa';

const LayoutAdmin = () => {
  function handleItemClick(item) {
    const hdlitem = document.getElementById(item);
    if (hdlitem) {
      hdlitem.classList.toggle('active');
    }
  }

  return (
    <>
      <section className="hdl-header sticky-top">
        <div className="container-fluid">
          <ul className="menutop">
            <li>
              <a href="">
                <i className="fa-brands fa-dashcube"></i> Shop Thời trang
              </a>
            </li>
            <li className="text-phai">
              <a href="">
                <i className="fa-solid fa-power-off"></i> Thoát
              </a>
            </li>
            <li className="text-phai">
              <a href="">
                <i className="fa fa-user" aria-hidden="true"></i> Chào quản lý
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 bg-dark p-0 hdl-left">
              <div className="hdl-left">
                <div className="dashboard-name">Bản điều khiển</div>
                <nav className="m-2 mainmenu">
                  <ul className="main">
                    <li className="hdlitem item-sub" id="item1" onClick={() => handleItemClick('item1')}>
                      <FaProductHunt className="icon-left" />
                      <a href="#">Sản phẩm</a>
                      <FaPlus className="icon-right" />
                      <ul className="submenu">
                        <li>
                          <a href="/admin/product/index">Tất cả sản phẩm</a>
                        </li>
                        <li>
                          <a href="product_import.html">Nhập hàng</a>
                        </li>
                        <li>
                          <a href="/admin/category/index">Danh mục</a>
                        </li>
                        <li>
                          <Link to="/admin/brand/index">Thương hiệu</Link>
                        </li>
                        <li>
                          <a href="/admin/productsale/index">Khuyến mãi</a>
                        </li>
                      </ul>
                    </li>
                    <li className="hdlitem item-sub" id="item4" onClick={() => handleItemClick('item4')}>
                      <FaProductHunt className="icon-left" />
                      <a href="#">Bài viết</a>
                      <FaPlus className="icon-right" />
                      <ul className="submenu">
                        <li>
                          <a href="/admin/post/index">Tất cả bài viết</a>
                        </li>
                        <li>
                          <a href="/admin/topic/index">Chủ đề</a>
                        </li>
                        <li>
                          <a href="page_index.html">Trang đơn</a>
                        </li>
                      </ul>
                    </li>
                    <li className="hdlitem item-sub" id="item3" onClick={() => handleItemClick('item3')}>
                      <FaProductHunt className="icon-left" />
                      <a href="#">Quản lý bán hàng</a>
                      <FaPlus className="icon-right" />
                      <ul className="submenu">
                        <li>
                          <a href="/admin/order/index">Tất cả đơn hàng</a>
                        </li>
                        <li>
                          <a href="order_export.html">Xuất hàng</a>
                        </li>
                      </ul>
                    </li>
                    <li className="hdlitem">
                      <i className="fa-regular fa-circle icon-left"></i>
                      <Link to="">Khách hàng</Link>
                    </li>
                    <li className="hdlitem">
                      <i className="fa-regular fa-circle icon-left"></i>
                      <a href="/admin/contact/index">Liên hệ</a>
                    </li>
                    <li className="hdlitem item-sub" id="item2" onClick={() => handleItemClick('item2')}>
                      <FaProductHunt className="icon-left" />
                      <a href="#">Giao diện</a>
                      <FaPlus className="icon-right" />
                      <ul className="submenu">
                        <li>
                          <a href="/admin/menu/index">Menu</a>
                        </li>
                        <li>
                          <a href="/admin/banner/index">Banner</a>
                        </li>
                      </ul>
                    </li>
                    <li className="hdlitem item-sub" id="item5" onClick={() => handleItemClick('item5')}>
                      <FaProductHunt className="icon-left" />
                      <a href="#">Hệ thống</a>
                      <FaPlus className="icon-right" />
                      <ul className="submenu">
                      <li>
                          <Link to="/admin/user/index">Thành viên</Link>
                        </li>
                        <li>
                          <Link to="/admin/config/index">Cấu hình</Link>
                        </li>
                      </ul>
                    </li>
                   
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-10">
              <div className="content">
                <section className="content-header my-2">
                  <h1 className="d-inline">Trang trống</h1>
                </section>
                <section className="content-body my-2">
                  <Outlet />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutAdmin;
