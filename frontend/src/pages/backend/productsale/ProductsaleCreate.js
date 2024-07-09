import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";

// import { urlImage } from "../../../config";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link } from 'react-router-dom';

export default function ProductSaleCreate() {
    const [load, setLoad] = useState(true);
    const [reload, setReLoad] = useState(0);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(1);
    const [detail, setDetail] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [price, setPrice] = useState(0);
    const [pricesale, setPriceSale] = useState(0);
    const [qty, setQty] = useState(1);

    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setLoad(true);
            try {
                const result = await BrandService.index();
                setBrands(result.brands);
            } catch (error) {
                console.error('Error fetching brands:', error);
            } finally {
                setLoad(false);
            }
        };

        fetchData();
    }, [reload]);
    useEffect(() => {
        const fetchData = async () => {
            setLoad(true);
            try {
                const result = await CategoryService.index();
                setCategories(result.categories);
            } catch (error) {
                console.error('Error fetching brands:', error);
            } finally {
                setLoad(false);
            }
        };

        fetchData();
    }, [reload]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category_id || !brand_id) {
            alert("Vui lòng chọn cả danh mục và thương hiệu.");
            return;
        }
        const image = document.getElementById('image');
        const product = new FormData();
        product.append('name', name);
        product.append('description', description);
        product.append('status', status);
        product.append('detail', detail);
        product.append('category_id', category_id);
        product.append('brand_id', brand_id);
        product.append('price', price);
        product.append('pricesale', pricesale);
        product.append('qty', qty);
        product.append('image', image);
        product.append('image', image.isDefaultNamespace.length === 0 ? '' : image.files[0]);

        const addProduct = async () => {
            try {
                const result = await ProductService.store(product);
                alert(result.message);
                setReLoad(result.product.id);
            } catch (error) {
                console.error('Lỗi khi thêm sản phẩm:', error);
            } finally {
                setReLoad(!reload);
            }
        };

        addProduct();
    };

    return (
        <div class="col-md-10">
            <div class="content">
                <section class="content-header my-2">
                    <h1 class="d-inline">Thêm sản phẩm</h1>
                    <div class="mt-1 text-end">
                        <Link to={`/admin/product/index`} class="btn btn-sm btn-primary">
                            <i class="fa fa-arrow-left"></i> Về danh sách
                        </Link>
                    </div>
                </section>
                <section class="content-body my-2">
                    {load ? <LoadingSpinner /> : ''}

                    <form onSubmit={handleSubmit}>

                        <div class="row">
                            <div class="col-md-9">
                                <div class="mb-3">
                                    <label><strong>Tên sản phẩm (*)</strong></label>
                                    <input type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name} placeholder="Nhập tên sản phẩm"
                                        className="form-control" required />
                                </div>
                                <div class="mb-3">
                                    <label><strong>Chi tiết (*)</strong></label>
                                    <textarea name="detail"
                                        onChange={(e) => setDetail(e.target.value)}
                                        value={detail}
                                        placeholder="Nhập chi tiết sản phẩm" rows="7"
                                        class="form-control"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label><strong>Mô tả (*)</strong></label>
                                    <textarea name="description"
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                        rows="3" class="form-control" placeholder="Nhập mô tả"></textarea>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="box-container mt-4 bg-white">
                                    <div class="box-header py-1 px-2 border-bottom">
                                        <strong>Đăng</strong>
                                    </div>
                                    <div class="box-body p-2 border-bottom">
                                        <select name="status"
                                            onChange={(e) => setStatus(e.target.value)} value={status}
                                            class="form-select">
                                            <option value={1}>Xuất bản</option>
                                            <option value={2}>Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div class="box-footer text-end px-2 py-2">
                                        <button type="submit" class="btn btn-success btn-sm text-end">
                                            <i class="fa fa-save" aria-hidden="true"></i> Đăng
                                        </button>
                                    </div>
                                </div>
                                <div class="box-container mt-2 bg-white">
                                    <div class="box-header py-1 px-2 border-bottom">
                                        <strong>Danh mục(*)</strong>
                                    </div>
                                    <div class="box-body p-2 border-bottom">
                                        <select name="category_id"
                                            onChange={(e) => setCategoryId(e.target.value)} value={category_id}
                                            class="form-select">
                                            <option value="">Chọn thương hiệu</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div class="box-container mt-2 bg-white">
                                    <div class="box-header py-1 px-2 border-bottom">
                                        <strong>Thương hiệu(*)</strong>
                                    </div>
                                    <div class="box-body p-2 border-bottom">
                                        <select name="brand_id"
                                            onChange={(e) => setBrandId(e.target.value)} value={brand_id}
                                            class="form-select">
                                            <option value="">Chọn thương hiệu</option>
                                            {brands.map((brand) => (
                                                <option key={brand.id} value={brand.id}>
                                                    {brand.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div class="box-container mt-2 bg-white">
                                    <div class="box-header py-1 px-2 border-bottom">
                                        <strong>Giá và số lượng</strong>
                                    </div>
                                    <div class="box-body p-2 border-bottom">
                                        <div class="mb-3">
                                            <label><strong>Giá bán (*)</strong></label>
                                            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} id="price" min="10000" name="price" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label><strong>Giá khuyến mãi (*)</strong></label>
                                            <input type="number" onChange={(e) => setPriceSale(e.target.value)} value={pricesale} id="pricesale" min="10000" name="pricesale" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label><strong>Số lượng (*)</strong></label>
                                            <input type="number" onChange={(e) => setQty(e.target.value)} value={qty} id="qty" min="1" name="qty" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="box-container mt-2 bg-white">
                                    <div class="box-header py-1 px-2 border-bottom">
                                        <strong>Hình đại diện(*)</strong>
                                    </div>
                                    <div class="box-body p-2 border-bottom">
                                        <input type="file" id="image" name="image" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
