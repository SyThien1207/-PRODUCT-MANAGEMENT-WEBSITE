import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../LoadingSpinner";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

import { FaEdit, FaEye, FaToggleOn, FaToggleOff } from "react-icons/fa";
import TopicService from "../../../services/TopicService";

export default function TopicIndex() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReLoad] = useState(0);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sort_order, setSortOrder] = useState(1);
  const [status, setStatus] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await TopicService.index();
        setTopics(result.topics);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching topics:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [reload]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const topic = new FormData();
    topic.append("name", name);
    topic.append("sort_order", sort_order);
    topic.append("description", description);
    topic.append("created_by", 1);
    topic.append("status", status);

    const addTopic = async () => {
      try {
        const result = await TopicService.store(topic);
        alert(result.message);
        setReLoad(result.topic.id);
      } catch (error) {
        console.error("Error adding topic:", error);
      } finally {
        setReLoad(!reload);
      }
    };
    addTopic();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this topic?")) {
      try {
        const result = await TopicService.destroy(id);
        alert(result.message);
        setReLoad(result.topic.id);
      } catch (error) {
        console.error("Error deleting topic:", error);
      }
    }
  };

 const handleStatus = async (id, currentStatus) => {
   if (
     window.confirm(
       "Are you sure you want to change the status of this topic?"
     )
   ) {
     try {
       const newStatus = currentStatus === 1 ? 2 : 1;
       const updatedData = { status: newStatus };
       const result = await TopicService.update(updatedData, id);
       alert(result.message);
       setTopics((topics) =>
         topics.map((topic) =>
           topic.id === id ? { ...topic, status: newStatus } : topic
         )
       );
     } catch (error) {
       console.error("Error updating product status:", error);
     }
   }
 };

  return (
    <div>
      <section className="hdl-content">
        <div className="container-fluid">
          <div className="row">
            <div className="content">
              <section className="content-header my-2">
                <h1 className="d-inline">Chủ đề bài viết</h1>
                <hr style={{ border: "none" }} />
              </section>
              <section className="content-body my-2">
                <div className="row">
                  <div className="col-md-4">
                    <form
                      onSubmit={handleSubmit}
                      id="idreset"
                      encType="multipart/form-data"
                    >
                      <div className="mb-3">
                        <label>
                          <strong>Tên chủ đề (*)</strong>
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          placeholder="Nhập tên danh mục"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>
                          <strong>Mô tả</strong>
                        </label>
                        <textarea
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                          rows="4"
                          placeholder="mô tả"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label>
                          <strong>sort_order</strong>
                        </label>
                        <select
                          onChange={(e) => setSortOrder(e.target.value)}
                          value={sort_order}
                          className="form-select"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label>
                          <strong>Trạng thái</strong>
                        </label>
                        <select
                          onChange={(e) => setStatus(e.target.value)}
                          value={status}
                          className="form-control"
                        >
                          <option value={1}>Xuất bản</option>
                          <option value={2}>Chưa xuất bản</option>
                        </select>
                      </div>
                      <div className="mb-3 text-end">
                        <button
                          type="submit"
                          className="btn btn-success"
                          name="THEM"
                        >
                          <i className="fa fa-save" /> Lưu[Thêm]
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-8">
                    <div className="row mt-3 align-items-center">
                      <div className="col-12">
                        <ul className="manager">
                          <li>
                            <a href="brand_index.html">
                              Tất cả ({topics.length})
                            </a>
                          </li>
                          {/* You can replace 'brand_index.html' with the appropriate link */}
                          <li>
                            <a href="#">Xuất bản (12)</a>
                          </li>
                          <li>
                            <a href="brand_trash.html">Rác (12)</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row my-2 align-items-center">
                      <div className="col-md-6">
                        <select name className="d-inline me-1">
                          <option value>Hành động</option>
                          <option value>Bỏ vào thùng rác</option>
                        </select>
                        <button className="btnapply">Áp dụng</button>
                      </div>
                      <div className="col-md-6 text-end">
                        <input type="text" className="search d-inline" />
                        <button className="d-inline">Tìm kiếm</button>
                      </div>
                    </div>
                    {loading ? <LoadingSpinner /> : ""}
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="text-center" style={{ width: 30 }}>
                            <input type="checkbox" id="checkboxAll" />
                          </th>
                          <th>Tên chủ đề</th>
                          <th>Tên slug</th>
                          <th className="text-center" style={{ width: 30 }}>
                            ID
                          </th>
                          <th className="text-center" style={{ width: 30 }}>
                            action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {topics.map((topic, index) => (
                          <tr className="datarow" key={index}>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td>
                              <a href="brand_index.html">{topic.name}</a>
                            </td>
                            <td>{topic.slug}</td>
                            <td className="text-center">{topic.id}</td>
                            <td className="text-center">
                              <Link
                                to={`/admin/topic/edit/${topic.id}`}
                                className="px-1 text-primary"
                              >
                                <FaEdit />
                              </Link>
                              <Link
                                to={`/admin/topic/show/${topic.id}`}
                                className="px-1 text-info"
                              >
                                <FaEye />
                              </Link>
                              <a
                                href="#st"
                                className="px-1 text-danger"
                                onClick={() => handleDelete(topic.id)}
                              >
                                <MdDeleteForever />
                              </a>
                              <a
                                href="#st"
                                className="px-1 text-success"
                                onClick={() =>  handleStatus(topic.id, topic.status)}
                              >
                                {topic.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
