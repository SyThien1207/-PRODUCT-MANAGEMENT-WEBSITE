import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../LoadingSpinner";
import ConfigService from "../../../services/ConfigService";
import { Link } from "react-router-dom";
import { FaEdit, FaPen } from "react-icons/fa";  // Thêm biểu tượng cập nhật (FaPen)

const ConfigIndex = () => {
  const [configs, setConfigs] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReload] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await ConfigService.index();
        console.log(result); // Kiểm tra dữ liệu trả về từ API trong console
        setConfigs(result.configurations || []); // Sửa thành result.configurations
        setTotal(result.total);
        setLoad(false);
      } catch (error) {
        console.error("Lỗi:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [reload]);

  return (
    <div>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            <div className="content">
              <section className="content-header my-2">
                <h1 className="d-inline">Cấu hình</h1>
                <div className="row mt-3 align-items-center">
                  <div className="col-6">
                    <ul className="manager">
                      <li></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="content-body my-2">
                {load ? <LoadingSpinner /> : ""}
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Tác giả</th>
                      <th>Email</th>
                      <th>Điện thoại</th>
                      <th>Zalo</th>
                      <th>Facebook cá nhân</th>
                      <th>Địa chỉ</th>
                      <th>Kênh Youtube</th>
                      <th>Mô tả seo</th>
                      <th>Từ khoa seo</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {configs.map((config) => (
                      <tr className="datarow" key={config.id}>
                        <td className="text-center">
                          {config.author}
                          <div className="function_style">
                            <Link
                              to={`/admin/config/edit/${config.id}`}
                              className="px-1 text-primary"
                              state={{ configData: config }} // Truyền dữ liệu qua đường dẫn
                            >
                              <FaEdit />
                            </Link>
                          </div>
                        </td>
                        <td>{config.email}</td>
                        <td>{config.phone}</td>
                        <td>{config.zalo}</td>
                        <td>{config.facebook}</td>
                        <td>{config.address}</td>
                        <td>{config.youtube}</td>
                        <td>{config.metadesc}</td>
                        <td>{config.metakey}</td>
                        <td>{config.status}</td>
                        <td>
                        
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConfigIndex;
