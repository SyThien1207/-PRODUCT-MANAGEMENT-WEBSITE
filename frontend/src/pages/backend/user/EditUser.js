import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState(0);
  const [roles, setRoles] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserService.show(id);
        const user = result.user;
        setName(user.name);
        setUserName(user.username);
        // Không thay đổi cách xử lý mật khẩu ở đây để tránh băm
        setPassword(user.password);
        setGender(user.gender);
        setPhone(user.phone);
        setEmail(user.email);
        setRoles(user.roles);
        setStatus(user.status);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      username,
      password, // Truyền mật khẩu dưới dạng văn bản thô
      email,
      phone,
      gender,
      roles,
      status,
    };

    try {
      const result = await UserService.update(user, id);
      alert(result.message);
      navigate("/admin/user/index", { replace: true });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="content">
      {/* ... */}
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              <strong>Tên đăng nhập(*)</strong>
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>
              <strong>Mật khẩu(*)</strong>
            </label>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* ... */}
          <div className="mb-3">
            <label>
              <strong>Điện thoại(*)</strong>
            </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              <strong>Họ tên (*)</strong>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Họ tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>
              <strong>Giới tính</strong>
            </label>
            <select
              name="gender"
              id="gender"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Chọn giới tinh</option>
              <option value="1">Nam</option>
              <option value="0">Nữ</option>
            </select>
          </div>
          {/* ... */}
          <div className="mb-3">
                  <label>
                    <strong>Vai trò</strong>
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-select"
                    onChange={(e) => setRoles(e.target.value)}

                  >
                    <option>chọn vai trò</option>
                      <option value="1">Quản lý</option>
                      <option value="2" >Nhân viên</option>
                      <option value="3">Thành viên</option>
                  </select>
                </div>
          <div className="mb-3">
            <label>
            </label>
            <div className="box-container mt-4 bg-white">
              <div className="box-header py-1 px-2 border-bottom">
                <strong>Đăng</strong>
              </div>
            <div className="box-body p-2 border-bottom">
            <strong>Trạng thái</strong>

                <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  className="form-control"
                >
                  <option value={1}>Xuất bản</option>
                  <option value={2}>Chưa xuất bản</option>
                </select>
              </div>
              <div className="box-footer text-end px-2 py-2">
                <button
                  type="button"
                  className="btn btn-success btn-sm text-end"
                  onClick={handleSubmit}
                >
                  <i className="fa fa-save" aria-hidden="true" /> Đăng
                </button>
              </div>
          </div>
          <section className="content-header my-2">
        <div className="mt-1 text-end">
          <a className="btn btn-sm btn-primary" href="/admin/user/index">
            <i className="fa fa-arrow-left" /> Về danh sách
          </a>
        </div>
      </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
