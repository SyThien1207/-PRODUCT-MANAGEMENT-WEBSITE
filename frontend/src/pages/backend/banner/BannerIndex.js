import React, { useEffect, useState } from "react";
import BannerService from "../../../services/BannerService";
import { urlImage } from "../../../config";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEye,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";


export default function BannerIndex() {
  const [banners, setBanners] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);

  useEffect(() => {
    (async () => {
      setLoad(false);
      const result = await BannerService.index();
      setBanners(result.banners);
      setLoad(false);
    })();
  }, [reload]);

    const handleDelete = async (id) => {
      if (window.confirm("Are you sure you want to delete this banner?")) {
        try {
          const result = await BannerService.destroy(id);
          alert(result.message);
          setReLoad(result.id);
        } catch (error) {
          console.error("Error deleting banner:", error);
        }
      }
    };

    const handleStatus = async (id, currentStatus) => {
      if (
        window.confirm(
          "Are you sure you want to change the status of this banner?"
        )
      ) {
        try {
          const newStatus = currentStatus === 1 ? 2 : 1;
          const updatedData = { status: newStatus };
          const result = await BannerService.update(updatedData, id);
          alert(result.message);
          setBanners((banners) =>
            banners.map((banner) =>
              banner.id === id ? { ...banner, status: newStatus } : banner
            )
          );
        } catch (error) {
          console.error("Error updating product status:", error);
        }
      }
    };
  //hàm thêm


  return (
    <div>
      
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
          
            <div className="col-md-10">
              {/*CONTENT  */}
              <div className="content">
                <section className="content-header my-2">
                  <h1 className="d-inline">Banner</h1>
                  <Link className="btn btn-primary btn-sm" to={'/admin/banner/store'} style={{ margin:30, color: "white" }}> Thêm</Link>
                  <div className="row mt-3 align-items-center">
                    <div className="col-6">
                      <ul className="manager">
                        <li>
                          <a href="banner_index.html">Tất cả (123)</a>
                        </li>
                        <li>
                          <a href="#">Xuất bản (12)</a>
                        </li>
                        <li>
                          <a href="banner_trash.html">Rác (12)</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 text-end">
                      <input type="text" className="search d-inline" />
                      <button className="d-inline btnsearch">Tìm kiếm</button>
                    </div>
                  </div>
                  {load ? <LoadingSpinner /> : ""}
                  <div className="row mt-1 align-items-center">
                    <div className="col-md-8">
                      <select name className="d-inline me-1">
                        <option value>Hành động</option>
                        <option value>Bỏ vào thùng rác</option>
                      </select>
                      <button className="btnapply">Áp dụng</button>
                      <select name className="d-inline me-1">
                        <option value>Tất cả vị trí</option>
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
                <section className="content-body my-2">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center" style={{ width: 30 }}>
                          <input type="checkbox" id="checkboxAll" />
                        </th>
                        <th className="text-center" style={{ width: 130 }}>
                          Hình ảnh
                        </th>
                        <th>Tên banner</th>
                        <th>Vị trí</th>
                        <th>Liên kết</th>
                        <th className="text-center" style={{ width: 30 }}>
                          ID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {banners &&
                        banners.map((banner, index) => {
                          return (
                            <tr className="datarow" key={index}>
                              <td className="text-center">
                                <input type="checkbox" />
                              </td>
                              <td>
                                <img
                                  className="img-fluid"
                                  src={urlImage + "banner/" + banner.image}
                                  alt={banner.image}
                                />
                              </td>
                              <td>
                                <div className="name">
                                  <a href="banner_index.html">{banner.name}</a>
                                </div>
                                <div className="function_style">
                                  <button
                                    onClick={() =>
                                      handleStatus(banner.id, banner.status)
                                    }
                                    className={
                                      banner.status === 1
                                        ? "border-0 px-1 text-success"
                                        : "border-0 px-1 text-danger"
                                    }
                                  >
                                    {banner.status === 1 ? (
                                      <FaToggleOn />
                                    ) : (
                                      <FaToggleOn />
                                    )}
                                  </button>
                                  <Link
                                    to={"/admin/banner/edit/" + banner.id}
                                    className="px-1 text-primary"
                                  >
                                    <FaEdit />
                                  </Link>
                                  <Link
                                    to={"/admin/banner/show/" + banner.id}
                                    className="px-1 text-info"
                                    
                                  > <FaEye /></Link>
                                  <button
                                    onClick={() => handleDelete(banner.id)}
                                    className="px-1 text-danger"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </td>
                              <td>{banner.position}</td>
                              <td>{banner.link}</td>
                              <td className="text-center">{banner.id}</td>
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
