import React, { useEffect, useState } from "react";

import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from 'react-router-dom';
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";

export default function ProductSaleIndex() {
  const [products, setProducts] = useState([]);
   const [load, setLoad] = useState(true);
   const [reload, setReLoad] = useState(0);
   const [total, setTotal] = useState(0);

 useEffect(() => {
   const fetchData = async () => {
     try {
       setLoad(true);
       const result = await ProductService.index();
       setProducts(result.products);
       setTotal(result.total);
       setLoad(false);
     } catch (error) {
       console.error("Error:", error);
       setLoad(false);
     }
   };

   fetchData();
 }, [reload]);

  return (
    <div className="col-md-10">
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Tất cả sản phẩm</h1>
          <Link to={`/admin/productslae/create`} className="btn-add">
            Thêm mới
          </Link>
          <div className="row mt-3 align-items-center">
            <div className="col-6">
              <ul className="manager">
                <li>
                  <a href="product_index.html">Tất cả (123)</a>
                </li>
                <li>
                  <a href="#st">Xuất bản (12)</a>
                </li>
                <li>
                  <a href="product_trash.html">Rác (12)</a>
                </li>
              </ul>
            </div>
            <div className="col-6 text-end">
              <input type="text" className="search d-inline" />
              <button className="d-inline btnsearch">Tìm kiếm</button>
            </div>
          </div>
          <div className="row mt-1 align-items-center">
            <div className="col-md-8">
              <select name="" className="d-inline me-1">
                <option value="">Hành động</option>
                <option value="">Bỏ vào thùng rác</option>
              </select>
              <button className="btnapply">Áp dụng</button>
              <select name="" className="d-inline me-1">
                <option value="">Tất cả danh mục</option>
              </select>
              <select name="" className="d-inline me-1">
                <option value="">Tất cả thương hiệu</option>
              </select>
              <button className="btnfilter">Lọc</button>
            </div>
            <div className="col-md-4 text-end">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-sm justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link" href="#st">
                      «
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#st">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#st">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#st">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#st">
                      »
                    </a>
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
                <th className="text-center" style={{ width: "30px" }}>
                  <input type="checkbox" id="checkboxAll" />
                </th>
                <th className="text-center" style={{ width: "130px" }}>
                  Hình ảnh
                </th>
                <th>Tên sản phẩm</th>
             
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product, index) => {
                  return (
                    <tr className="datarow" key={index}>
                      <td>
                        <input type="checkbox" id={`checkId_${product.id}`} />
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImage + "product/" + product.image}
                          alt={product.image}
                        />
                      </td>
                      <td>
                        <div className="name">
                          <a href={`product_edit.html?id=${product.id}`}>
                            {product.name}
                          </a>
                        </div>
                        <div className="function_style">
                          <Link
                            to={`/admin/product/index`}
                            className={`px-1 text-${
                              product.status === 1 ? "success" : "danger"
                            }`}
                            // onClick={() =>
                            //   handleToggleStatus(product.id, product.status)
                            // }
                          >
                            {product.status === 1 ? (
                              <i class="fa fa-toggle-on"></i>
                            ) : (
                              <i class="fa fa-toggle-off"></i>
                            )}
                          </Link>

                          <Link
                            to={`/admin/product/edit/${product.id}`}
                            className="px-1 text-primary"
                          >
                            <i className="fa fa-edit"></i>
                          </Link>
                          <Link
                            to={`/admin/product/show/${product.id}`}
                            className="px-1 text-info"
                          >
                            <i className="fa fa-eye"></i>
                          </Link>
                          <Link
                            to={`/admin/product/index`}
                            className="px-1 text-danger"
                            // onClick={() => handleDelete(product.id)}
                          >
                            <i className="fa fa-trash"></i>
                          </Link>
                        </div>
                      </td>
                      {/* <td>{product.category.name}</td> */}
                      {/* <td>{product.brand.name}</td> */}

                      <td className="text-center" style={{ width: "30px" }}>
                        {product.id}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
