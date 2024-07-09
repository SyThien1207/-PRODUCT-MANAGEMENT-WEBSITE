import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaEye,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { urlImage } from "../../../config";
import PostService from "../../../services/PostService";
import LoadingSpinner from "../../../LoadingSpinner";

export default function PostIndex() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await PostService.index();
        setPosts(result.posts);
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
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const result = await PostService.destroy(id);
        alert(result.message);
        setReLoad(result.id);
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };
  const handleStatus = async (id, currentStatus) => {
    if (
      window.confirm(
        "Are you sure you want to change the status of this post?"
      )
    ) {
      try {
        const newStatus = currentStatus === 1 ? 2 : 1;
        const updatedData = { status: newStatus };
        const result = await PostService.update(updatedData, id);
        alert(result.message);
        setPosts((posts) =>
          posts.map((post) =>
            post.id === id ? { ...post, status: newStatus } : post
          )
        );
      } catch (error) {
        console.error("Error updating product status:", error);
      }
    }
  };

  return (
    <div>
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Quản lý bài viết</h1>
          <Link
            className="btn btn-primary btn-sm"
            to={"/admin/post/create"}
            style={{ color: "white", margin: 20 }}
          >
            Thêm
          </Link>
          <div className="row mt-3 align-items-center">
           
           
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
                <th>Tiêu đề bài viết</th>
                <th>topic_id</th>
                <th>detail</th>
                <th className="text-center" style={{ width: 30 }}>
                  ID
                </th>
              </tr>
            </thead>
            <tbody>
              {posts &&
                posts.map((post, index) => {
                  return (
                    <tr className="datarow" key={index}>
                      <td>
                        <input type="checkbox" id="checkId" />
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImage + "post/" + post.image}
                          alt={post.image}
                        />
                      </td>
                      <td>
                        <div className="name">
                          <a href="post_edit.html">{post.title}</a>
                        </div>
                        <div className="function_style">
                          <button
                            onClick={() => handleStatus(post.id, post.status)}
                          >
                            {post.status === 1 ? (
                              <FaToggleOn />
                            ) : (
                              <FaToggleOn />
                            )}
                          </button>
                          <Link
                            to={"/admin/post/edit/" + post.id}
                            className="px-1 text-primary"
                          >
                            <FaEdit />
                          </Link>
                          <Link
                            to={`/admin/post/show/${post.id}`}
                            className="px-1 text-info"
                          >
                            <FaEye />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="px-1 text-danger"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                      <td>{post.topic_id}</td>
                      <td>{post.detail}</td>
                      <td className="text-center">{post.id}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}
