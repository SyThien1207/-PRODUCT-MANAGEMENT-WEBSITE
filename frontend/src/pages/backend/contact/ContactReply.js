import React, { useEffect, useState } from "react";
import {useParams, useNavigate } from "react-router-dom";
import ContactService from "../../../services/ContactService";

const ContactReply = () => {
  const navigate = useNavigate();
    const { id } = useParams();
    
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ContactService.show(id);
        const contact = result.contact;
        setName(contact.name);
        setTitle(contact.title);
        setContent(contact.content);
        setPhone(contact.phone);
        setEmail(contact.email);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = {
        name,
        title,
        content,
      email,
      phone,
    };

    try {
      const result = await ContactService.update(contact, id);
      alert(result.message);
      navigate("/admin/contact/index", { replace: true });
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="content">
    <section className="content-header my-2">
       <h1 className="d-inline">Trả lời liên hệ</h1>
       <div className="text-end">
          <a href="contact_index.html" className="btn btn-sm btn-success">
             <i className="fa fa-arrow-left"></i> Về danh sách
          </a>
                  <button type="submit" className="btn btn-success btn-sm text-end"
                  onClick={handleSubmit}
                  >
             <i className="fa fa-save" aria-hidden="true"></i> Trả lời liên hệ
          </button>
       </div>
    </section>
    <section className="content-body my-2">

       <div className="row">
          <div className="col-4">
             <div className="mb-3">
             <label htmlFor="name" className="text-main">Họ tên</label>                <input type="text" name="name" id="name" className="form-control" placeholder="Nhập họ tên"
                              value={name}
                              onChange={(e) => setName(e.target.value)}/>
             </div>
          </div>
          <div className="col-4">
             <div className="mb-3">
                <label htmlFor="phone" className="text-main">Điện thoại</label>
                <input type="text" name="phone" id="phone" className="form-control"
                              placeholder="Nhập điện thoại" 
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}/>
             </div>
          </div>
          <div className="col-4">
             <div className="mb-3">
                <label htmlFor="email" className="text-main">Email</label>
                <input type="text" name="email" id="email" className="form-control" placeholder="Nhập email"
                              
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}/>
             </div>
          </div>
       </div>
       <div className="row">
          <div className="col-12">
             <div className="mb-3">
                <label htmlFor="title" className="text-main">Tiêu đề</label>
                <input type="text" name="title" id="title" className="form-control" placeholder="Nhập tiêu đề"
                              
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}/>
             </div>
             <div className="mb-3">
                <label htmlFor="content_old" className="text-main">Nội dung</label>
                <textarea name="content_old" id="content_old" className="form-control"
                              placeholder="Nhập nội dung liên hệ" 
                              value={content}
                              onChange={(e) => setContent(e.target.value)}></textarea>
             </div>
             <div className="mb-3">
                <label htmlFor="content" className="text-main">Nội dung trả lời</label>
                <textarea name="content" id="content" className="form-control"
                   placeholder="Nhập nội dung liên hệ" rows="5"></textarea>
             </div>
          </div>
       </div>

    </section>
 </div>
  );
};

export default ContactReply;
