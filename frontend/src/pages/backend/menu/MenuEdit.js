import React, { useEffect, useState } from "react";
import MenuService from "../../../services/MenuService";
import { useNavigate, useParams } from "react-router-dom";
export default function MenuEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sort_order, setSortOrder] = useState(1);
  const [parent_id, setParentId] = useState(1);
  const [type, setType] = useState(1);
  const [table_id, setTableId] = useState("");
  const [description, setDescription] = useState("");
  const [created_by, setCreatedBy] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MenuService.show(id);
        const menuData = result.menu; // Adjust this based on the actual structure of your data

        setName(menuData.name);
        setLink(menuData.link);
        setSortOrder(1);
        setParentId(1);
        setType(1);
        setTableId(menuData.table_id);
        setDescription(menuData.description);
        setCreatedBy(1);
        setStatus(menuData.status);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, [id]);
    const handleSubmit = async () => {
      try {
        const data = {
          name,
          link,
          sort_order,
          parent_id,
          type,
          table_id,
          description,
          created_by,
          status,
        };
        const result = await MenuService.update(data, id);
        alert(result.message);
        navigate("/admin/menu/index");
      } catch (error) {
        console.error("Error updating product:", error);
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
                  <h1 className="d-inline">Cập nhật menu</h1>
                  <div className="text-end">
                    <a
                      href="menu_index.html"
                      className="btn btn-sm btn-success"
                    >
                      <i className="fa fa-arrow-left" /> Về danh sách
                    </a>
                  </div>
                </section>
                <section className="content-body my-2">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="mb-3">
                        <label htmlFor="name">
                          <strong>Tên menu</strong>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="link">
                          <strong>Liên kết</strong>
                        </label>
                        <input
                          type="text"
                          name="link"
                          id="link"
                          className="form-control"
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="position">
                          <strong>Vị trí</strong>
                        </label>
                        <select
                          name="position"
                          id="position"
                          className="form-control"
                        >
                          <option value="mainmenu">Main Menu</option>
                          <option value="footermenu">Footer Menu</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="box-container mt-4 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                          <strong>Đăng</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                          <p>Chọn trạng thái đăng</p>
                          <select name="status" className="form-control">
                            <option value={1}>Xuất bản</option>
                            <option value={2}>Chưa xuất bản</option>
                          </select>
                        </div>
                        <div className="box-footer text-end px-2 py-3">
                          <button
                            type="button"
                            className="btn btn-success btn-sm text-end"
                            onClick={handleSubmit}
                          >
                            <i className="fa fa-save" aria-hidden="true" /> Đăng
                          </button>
                        </div>
                      </div>
    
                      <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                          <strong>Thứ tự</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                          <select name="sort_order" className="form-control">
                            <option value={1}>Sau</option>
                            <option value={2}>sau</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
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
