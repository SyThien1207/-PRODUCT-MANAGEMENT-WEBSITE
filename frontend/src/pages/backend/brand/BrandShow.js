import React, { useEffect, useState } from 'react';
import BrandService from '../../../services/BrandService';
import { useParams } from 'react-router-dom';
import { urlImage } from '../../../config';
import { Link } from 'react-router-dom';


export default function BrandShow() {
    const { id } = useParams();
    const [reload, setReLoad] = useState(0);
    const [brand, setBrand] = useState({});
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(1);
    const [sort_order, setSortOrder] = useState(1);
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchBrandDetails = async () => {
            try {
                const result = await BrandService.show(id);
                const { brand } = result;
                setBrand(brand);
                setName(brand.name);
                setSlug(brand.slug);
                setDescription(brand.description);
                setStatus(brand.status);
                setSortOrder(brand.sort_order);
                setImage(brand.image); // Set the image property
            } catch (error) {
                console.error('Error fetching brand details:', error);
            }
        };

        fetchBrandDetails();
    }, [id]);
    const handleDelete = async (id) => {
        if (window.confirm('Bạn muốn xóa chứ?')) {
            try {
                const result = await BrandService.destroy(id);
                alert(result.message);
                setReLoad(result.brand.id);
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
                            <Link to={`/admin/brand/index`} className="btn btn-primary btn-sm">
                                <i class="fa fa-arrow-left"></i> Về danh sách
                            </Link>
                            <Link to={`/admin/brand/edit/${brand.id}`} className="btn btn-success btn-sm">
                                <i class="fa fa-edit"></i> Sửa
                            </Link>
                            <Link to={`/admin/brand/index`} className="btn btn-danger btn-sm" onClick={() => handleDelete(brand.id)}>
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
                                <td>{brand.id}</td>
                            </tr>
                            <tr>
                                <td>Tên thương hiệu</td>
                                <td>{name}</td>
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
                                <td>Sắp xếp</td>
                                <td>{sort_order}</td>
                            </tr>
                            <tr>
                                <td>Hình ảnh</td>
                                <td>
                                    <img
                                        className="img-fluid"
                                        src={urlImage + 'brand/' + image}
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
    );
}
