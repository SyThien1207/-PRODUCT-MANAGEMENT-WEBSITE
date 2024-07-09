import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import "../public/css/login.css"; // Đường dẫn đến file CSS
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await UserService.index();
        setUsers(result.users);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [reload]);

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setLoggedInUser(user);
      setError("");
      setTimeout(() => {
        // Sử dụng window.location.href để chuyển hướng đến trang sau khi đăng nhập thành công
        window.location.href = "/"; // Thay đổi URL của trang bạn muốn chuyển hướng đến
      }, 1000); // Chờ 1 giây trước khi chuyển hướng
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
         <Headers />
      <Menu />
    <div>
      {loggedInUser ? (
        <div>
          <div className={`welcome-message ${loggedInUser ? "active" : ""}`}>
            <h1>Welcome, {loggedInUser.email}!</h1>
          </div>
          {/* Add your main app content here */}
          </div>
          
        ) : (
            
            <div>
               <section className="bg-light">
        <div className="container">
          <nav style={{ breadcrumbDivider: ">" }} aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="index.html">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Đăng nhập
              </li>
            </ol>
          </nav>
        </div>
              </section>
              
              <section className="hdl-maincontent py-2">
        <form action="login.html" method="post" name="logincustomer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p>
                  Để gửi bình luận, liên hệ hay để mua hàng cần phải có tài
                  khoản
                </p>
              </div>
              <div className="col-md-8">
                <div className="mb-3">
                  <label htmlFor="username" className="text-main">
                    Email (*)
                  </label>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="text-main">
                    Mật khẩu (*)
                  </label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                </div>
                <div className="mb-3">
                  <button className="btn btn-main" name="LOGIN"
                  onClick={handleLogin}>
                    Đăng nhập
                  </button>
                </div>
                <p>
                  <u className="text-main">Chú ý</u>: (*) Thông tin bắt buộc
                  phải nhập
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
        </div>
      )}
      </div>
      <Footer />
     < EndFooter/>
    </>
  );
};

export default Login;
