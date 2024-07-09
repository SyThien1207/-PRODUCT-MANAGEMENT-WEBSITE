import React, { useEffect, useState } from 'react';
import ProductService from '../../../services/ProductService';
import { useParams } from 'react-router-dom';
// Import the urlImage constant from your config file
import { urlImage } from '../../../config';
import { Link } from 'react-router-dom';

function ProductShow() {
    const { id } = useParams();
    const [reload, setReLoad] = useState(0);
    const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(1);
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    // Add the following state variables
const [brandName, setBrandName] = useState('');
const [categoryName, setCategoryName] = useState('');

    const [price, setPrice] = useState(0);
    const [pricesale, setPriceSale] = useState(0);
    const [qty, setQty] = useState(1);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const result = await ProductService.show(id);
                const { product } = result;
                setProduct(product);
                setName(product.name);
                setSlug(product.slug);
                setDescription(product.description);
                setStatus(product.status);
                setBrandId(product.brand_id);
                setCategoryId(product.category_id);
                setQty(product.qty);
                setPrice(product.price);
                setPriceSale(product.pricesale);
                setImage(product.image); // Set the image property
            } catch (error) {
                console.error('Error fetching brand details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);
    const handleDelete = async (id) => {
        if (window.confirm('Bạn muốn xóa chứ?')) {
            try {
                const result = await ProductService.destroy(id);
                alert(result.message);
                setReLoad(result.product.id);
            } catch (error) {
                console.error('Error deleting brand:', error);

            } finally {
                setReLoad(false);
            }
        }
    };
    return (
        <div className="col-md-10">
            {/* CONTENT */}
            <div className="content">
                <section className="content-header my-2">
                    <h1 className="d-inline">Chi tiết</h1>
                    <div class="row mt-2 align-items-center">
                        <div class="col-md-12 text-end">
                            <Link to={`/admin/product/index`} className="btn btn-primary btn-sm">
                                <i class="fa fa-arrow-left"></i> Về danh sách
                            </Link>
                            <Link to={`/admin/product/edit/${product.id}`} className="btn btn-success btn-sm">
                                <i class="fa fa-edit"></i> Sửa
                            </Link>
                            <Link to={`/admin/product/index`} className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
                                <i class="fa fa-trash"></i> Xóa
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="content-body my-2">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 180 }}>Tên trường</th>
                                <th>Giá trị</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{product.id}</td>
                            </tr>
                            <tr>
                                <td>Tên sản phẩm</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Tên thương hiệu</td>
                                <td>{brand_id}</td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>{description}</td>
                            </tr>
                            <tr>
                                <td>Slug</td>
                                <td>{slug}</td>
                            </tr>
                            <tr>
                                <td>Trạng thái</td>
                                <td>{status === 1 ? 'Xuất bản' : 'Chưa xuất bản'}</td>
                            </tr>

                            <tr>
                                <td>Hình ảnh</td>
                                <td>
                                    <img
                                        className="img-fluid"
                                        src={urlImage + 'product/' + image}
                                        alt={image}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            {/* END CONTENT */}
        </div>
    )
}

export default ProductShow