import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../LoadingSpinner";
import MenuService from "../../../services/MenuService";
import { FaEdit, FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MenuIndex() {
  const [menus, setMenus] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sort_order, setSortOrder] = useState("1");
  const [parent_id, setSortOrder1] = useState("1");
  const [type, setType] = useState("");
  const [table_id, setTableId] = useState("");
  const [description, setDescription] = useState("");
  const [created_by, setCreatedBy] = useState("1");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await MenuService.index();
        setMenus(result.menus);
        setTotal(result.total);
        setLoad(false);
      } catch (error) {
        console.error("Error:", error);
        setLoad(false);
      }
    };
    fetchData();
  }, [reload]);
  const handleStatus = async (id, currentStatus) => {
    if (
      window.confirm("Are you sure you want to change the status of this Menu?")
    ) {
      try {
        const newStatus = currentStatus === 1 ? 2 : 1;
        const updatedData = { status: newStatus };
        const result = await MenuService.update(updatedData, id);
        alert(result.message);
        setMenus((menus) =>
          menus.map((menu) =>
            menu.id === id ? { ...menu, status: newStatus } : menu
          )
        );
      } catch (error) {
        console.error("Error updating product status:", error);
      }
    }
  };
  const handleSubmit = async () => {
    try {
      const menus = new FormData();
      menus.append("name", name);
      menus.append("link", link);
      menus.append("sort_order", sort_order);
      menus.append("parent_id", parent_id);
      menus.append("type", type);
      menus.append("table_id", table_id);
      menus.append("description", description);
      menus.append("created_by", created_by);
      menus.append("status", status);
      const result = await MenuService.store(menus);
      alert(result.message);
       console.log("Rendered with state:", {
         name,
         link,
         sort_order,
         parent_id,
         type,
         table_id,
         description,
         created_by,
         status,
       });
    } catch (error) {
       console.log("Rendered with state:", {
         name,
         link,
         sort_order,
         parent_id,
         type,
         table_id,
         description,
         created_by,
         status,
       });
      console.error("Error submitting form:", error);
    }
  };
 const handleDelete = async (id) => {
   if (window.confirm("Are you sure you want to delete this menu?")) {
     try {
       const result = await MenuService.destroy(id);
       alert(result.message);
       setReLoad(result.id);
     } catch (error) {
       console.error("Error deleting product:", error);
     }
   }
 };
  return (
    <div>
      <div className="col-md-9">
        <h3 className="row mt-1 align-items-center">Menu</h3>

        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label>
                  <strong>Tên Menu (*)</strong>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Nhập tên"
                  className="form-control"
                  required
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Link</strong>
                </label>
                <textarea
                  onChange={(e) => setLink(e.target.value)}
                  rows="4"
                  placeholder="Mô tả"
                  className="form-control"
                  required
                  name="link"
                ></textarea>
              </div>

              <div className="mb-3">
                <label>
                  <strong>Vị trí</strong>
                </label>
                <select
                  className="form-select"
                  name="table_id"
                  onChange={(e) => setTableId(e.target.value)}
                >
                  <option value={1}>Hearder</option>
                  <option value={2}>Footer</option>
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Type</strong>
                </label>
                <textarea
                  onChange={(e) => setType(e.target.value)}
                  rows="4"
                  placeholder="type"
                  className="form-control"
                  required
                  name="type"
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả </strong>
                </label>
                <textarea
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="description"
                  className="form-control"
                  required
                  name="description"
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  className="form-control"
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={1}>Xuất bản</option>
                  <option value={2}>Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button
                  type="button"
                  className="btn btn-success btn-sm text-end"
                  onClick={handleSubmit}
                >
                  <i className="fa fa-save" aria-hidden="true" /> Đăng
                </button>
              </div>
            </div>

            <div class="col-md-8">
              <div class="row mt-3 align-items-center">
                <div class="col-12">
                  <ul class="manager">
                    <li>
                      <a href="category_index.html">Tất cả (123)</a>
                    </li>
                    <li>
                      <a href="#st">Xuất bản (12)</a>
                    </li>
                    <li>
                      <a href="category_trash.html">Rác (12)</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row my-2 align-items-center">
                <div class="col-md-6">
                  <select name="" class="d-inline me-1">
                    <option value="">Hành động</option>
                    <option value="">Bỏ vào thùng rác</option>
                  </select>
                  <button class="btnapply">Áp dụng</button>
                </div>
                <div class="col-md-6 text-end">
                  <input type="text" class="search d-inline" />
                  <button class="d-inline btnsearch">Tìm kiếm</button>
                </div>
              </div>
              {load ? <LoadingSpinner /> : ""}
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: 30 }}>
                      <input type="checkbox" id="checkboxAll" />
                    </th>
                    <th>Tên menu</th>
                    <th>Liên kết</th>
                    <th>Vị trí</th>
                    <th className="text-center" style={{ width: 30 }}>
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {menus &&
                    menus.map((menu, index) => (
                      <tr className="datarow" key={index}>
                        <td className="text-center">
                          <input type="checkbox" id="checkId" />
                        </td>
                        <td>
                          <div className="name">{menu.name}</div>
                          <div className="function_style">
                            <a
                              href="#st"
                              className="px-1 text-success"
                              onClick={() => handleStatus(menu.id, menu.status)}
                            >
                              {menu.status === 1 ? (
                                <FaToggleOn />
                              ) : (
                                <FaToggleOff />
                              )}
                            </a>
                            <Link
                              to={`/admin/menu/edit/${menu.id}`}
                              className="text-primary mx-1"
                            >
                              <FaEdit />
                            </Link>
                           
                            <a
                              href="#st"
                              className="px-1 text-danger"
                              onClick={() => handleDelete(menu.id)}
                            >
                              <FaTrash />
                            </a>
                          </div>
                        </td>
                        <td>{menu.link}</td>
                        <td>
                          {menu.table_id === 1
                            ? "Header"
                            : menu.table_id === 2
                            ? "Footer"
                            : "End-Footer"}
                        </td>
                        <td className="text-center">{menu.id}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
