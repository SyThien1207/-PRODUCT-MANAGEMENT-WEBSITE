import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";
import UserService from "../../../services/UserService";
import ContactService from "../../../services/ContactService";
const Contact = () => {
   const navigate = useNavigate();
  const [created_by] = useState("1");
  const [reload, setReLoad] = useState(0);

  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [title,setTitle]=useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState(0);
  const [content, setContent] = useState(0);
  const [status, setStatus] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      try {
     
      const contact = new FormData();
      contact.append("created_by", created_by);
      contact.append("user", user);
      contact.append("name", name);
      contact.append("email", email);
      contact.append("phone", phone);
      contact.append("title", title);
      contact.append("content", content);
      contact.append("status", status);
  
      // Gửi user đến UserService.create
      const result = await ContactService.store(contact);
      alert(result.message);
      setReLoad(result.contact.id);
    } catch (error) {
      console.error("Lỗi khi gửi biểu mẫu:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResult = await UserService.index();
        setUser(userResult.user);
      
      } catch (error) {
        console.error("Error fetching brands and categories:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Headers />
      <Menu />
      {/* Content */}
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.746776096385!2d106.77242407468411!3d10.830680489321376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526ffdc466379%3A0x89b09531e82960d!2zMjAgVMSDbmcgTmjGoW4gUGjDuiwgUGjGsOG7m2MgTG9uZyBCLCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692683712719!5m2!1svi!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="text-main">
                  Họ tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Nhập họ tên"
                  onChange={(e) => setName(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="text-main">
                  Điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Nhập điện thoại"
                  onChange={(e) => setPhone(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="text-main">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Nhập email"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="text-main">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  placeholder="Nhập tiêu đề"
                  onChange={(e) => setTitle(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <label htmlFor="detail" className="text-main">
                  Nội dung
                </label>
                <textarea
                  name="detail"
                  id="detail"
                  className="form-control"
                  placeholder="Nhập nội dung liên hệ"
                  defaultValue={""}
                  onChange={(e) => setContent(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <button className="btn btn-main"
                 onClick={handleSubmit}>Gửi liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End content */}
      <Footer />
      <EndFooter />
    </>
  );
};

export default Contact;
