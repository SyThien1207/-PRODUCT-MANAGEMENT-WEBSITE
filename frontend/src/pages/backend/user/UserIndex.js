import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import LoadingSpinner from "../../../LoadingSpinner";
import { useNavigate, Link} from "react-router-dom";
import { FaEdit, FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";

const UserIndex = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [total, setTotal] = useState(0);
  const [statusFilter] = useState(1);
  const navigate = useNavigate();
  const publishedUserCount = users.filter(
    (product) => product.status === statusFilter
  ).length;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await UserService.index();
        setUsers(result.users); // Chắc chắn rằng UserService.index() trả về result.users
        setTotal(result.total);
        setLoad(false);
      } catch (error) {
        console.error("Error:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [reload]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const result = await UserService.destroy(id);
        alert(result.message);
        setReLoad(result.id);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
 

  const handleStatus = async (id, currentStatus) => {
    if (
      window.confirm(
        "Are you sure you want to change the status of this user?"
      )
    ) {
      try {
        const newStatus = currentStatus === 1 ? 2 : 1;
        const updatedData = { status: newStatus };
        const result = await UserService.update(updatedData, id);
        alert(result.message);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === id ? { ...user, status: newStatus } : user
          )
        );
      } catch (error) {
        console.error("Error updating user status:", error);
      }
    }
  };

  return (
//    
    <div>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            {/*CONTENT  */}
            <div className="content">
               <section class="content-header my-2">
                     <h1 class="d-inline">Thành viên</h1>
                     <a href="/admin/user/create" class="btn-add">Thêm mới</a>
                     <div class="row mt-3 align-items-center">
                        <div class="col-6">
                    <ul class="manager"> 
                    <li>
                        <a href="#st">Tất cả ({total})</a>
                      </li>
                      <li>
                        <a href="#st">Xuất bản ({publishedUserCount })</a>
                      </li>                              <li><a href="/admin/user/trash">Rác (12)</a></li>
                           </ul>
                        </div>
                        <div class="col-6 text-end">
                           <input type="text" class="search d-inline" />
                           <button class="d-inline btnsearch">Tìm kiếm</button>
                        </div>
                     </div>
                     <div class="row mt-1 align-items-center">
                        <div class="col-md-8">
                           <select name="" class="d-inline me-1">
                              <option value="">Hành động</option>
                              <option value="">Bỏ vào thùng rác</option>
                           </select>
                           <button class="btnapply">Áp dụng</button>
                        </div>
                        <div class="col-md-4 text-end">
                           <nav aria-label="Page navigation example">
                              <ul class="pagination pagination-sm justify-content-end">
                                 <li class="page-item disabled">
                                    <a class="page-link">&laquo;</a>
                                 </li>
                                 <li class="page-item"><a class="page-link" href="#">1</a></li>
                                 <li class="page-item"><a class="page-link" href="#">2</a></li>
                                 <li class="page-item"><a class="page-link" href="#">3</a></li>
                                 <li class="page-item">
                                    <a class="page-link" href="#">&raquo;</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </section>
              <section className="content-body my-2">
                {load ? <LoadingSpinner /> : ""}
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">
                        <input type="checkbox" id="checkAll" />
                      </th>
                      <th className="text-center">ID</th>

                      <th className="text-center">Vai trò</th>
                      <th>Họ tên</th>
                      <th>Điện thoại</th>
                      <th>Email</th>
                      <th>Giới tính</th>
                      <th>Mật Khẩu</th>
                    </tr>
                  </thead>
                  <tbody>
  {users &&
    users.map((user, index) => (
      <tr className="datarow" key={index}>
        <td className="text-center">
          <input type="checkbox" />
        </td>
        <td className="text-center">{user.id}</td>
        <td className="text-center">{user.roles}
        <div className="function_style">
            
            <a
              href="#st"
              className="px-1 text-success"
              onClick={() => handleStatus(user.id, user.status)}
          >
            
              {user.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
            </a>
            
            <Link
              to={`/admin/user/edit/${user.id}`}
              className="px-1 text-primary"
            >
              <FaEdit />
            </Link>
            <a
                                href="#st"
                                className="px-1 text-danger"
                                onClick={() => {
                                  handleDelete(user.id);
                                }}
                              >
                                <FaTrash />
                              </a>
           
          </div></td>

        <td>
          <div className="name">
            <Link to={`/admin/user/edit/${user.id}`}>{user.name}</Link>
          </div>
        </td>
        <td>{user.phone}</td>
        <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }}>{user.email}</td>
        <td>{user.gender}</td>
        <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }}>{user.password}</td>

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
export default UserIndex;
