import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";

// import { urlImage } from "../../../config";
import LoadingSpinner from "../../../LoadingSpinner";
import { Link, useParams } from 'react-router-dom';

function ProductEdit() {
    const { id } = useParams();

    const [load, setLoad] = useState(true);
    const [reload, setReLoad] = useState(0);

    const [product, setProduct] = useState([]);
    const [slug, setSlug] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(1);
    const [detail, setDetail] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [price, setPrice] = useState(0);
    const [pricesale, setPriceSale] = useState(0);
    const [qty, setQty] = useState(1);
    const [imageFile, setImageFile] = useState(null); // Add imageFile state


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

    useEffect(() => {
        const fetchBrandDetails = async () => {
            try {
                const result = await ProductService.show(id);
                const { product } = result;
                setProduct(product);
                setName(product.name);
                setSlug(product.slug);
                setDetail(product.detail);
                setDescription(product.description);
                setStatus(product.status);
                setQty(product.qty);
                setPrice(product.price);
                setPriceSale(product.pricesale);



            } catch (error) {
                console.error('Error fetching brand details:', error);
            }
        };

        fetchBrandDetails();
    }, [id]);
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!category_id || !brand_id) {
            alert("Vui lòng chọn cả danh mục và thương hiệu.");
            return;
        }
        const updatedProduct = new FormData();
        // Add other form data fields
        updatedProduct.append("name", name);
        updatedProduct.append("slug", slug);
        updatedProduct.append("detail", detail);
        updatedProduct.append("description", description);
        updatedProduct.append("status", status);
        updatedProduct.append("qty", qty);
        updatedProduct.append("price", price);
        updatedProduct.append("pricesale", pricesale);
        updatedProduct.append("category_id", category_id);
        updatedProduct.append("brand_id", brand_id);


        // Add the image file if it's selected
        if (imageFile) {
            updatedProduct.append("image", imageFile);
        }

        try {
            const result = await ProductService.update(updatedProduct, id);
            alert(result.message);
            // You may choose to redirect to the brand index page or perform other actions after successful update
        } catch (error) {
            console.error('Error updating brand:', error);
            // Handle error (e.g., show an error message to the user)
        } finally {
            setReLoad(!reload);
        }

    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    return (
        <div class="col-md-10">
            <form onSubmit={handleUpdate}>
                <div class="content">
                    <section class="content-header my-2">
                        <h1 class="d-inline">Cập nhập sản phẩm</h1>
                        <div class="mt-1 text-end">
                            <Link to={`/admin/product/index`} class="btn btn-sm btn-primary">
                                <i class="fa fa-arrow-left"></i> Về danh sách
                            </Link>
                        </div>
                    </section>
                    <section class="content-body my-2">

                        <div class="row">
                            <div class="col-md-9">
                                <div class="mb-3">
                                    <label><strong>Tên sản phẩm (*)</strong></label>
                                    <input type="text" value={name}
                                        onChange={(e) => setName(e.target.value)} placeholder="Nhập tên sản phẩm" name="name" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label><strong>Slug (*)</strong></label>
                                    <input type="text" value={slug}
                                        onChange={(e) => setSlug(e.target.value)} placeholder="Slug" name="slug" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label><strong>Chi tiết (*)</strong></label>
                                    <textarea name="detail"
                                        value={detail}
                                        onChange={(e) => setDetail(e.target.value)}
                                        placeholder="Nhập chi tiết sản phẩm" rows="7" class="form-control"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label><strong>Mô tả (*)</strong></label>
                                    <textarea name="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
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
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            class="form-select">
                                            <option value={1}>Xuất bản</option>
                                            <option value={2}>Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div class="box-footer text-end px-2 py-2">
                                        <button type="submit" class="btn btn-success btn-sm text-end">
                                            <i class="fa fa-save" aria-hidden="true"></i> Cập nhật
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
                                            {categories && categories.map((category) => (
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
                                            {brands && brands.map((brand) => (
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
                                            <input type="number" value={price}
                                                onChange={(e) => setPrice(e.target.value)} min="10000" name="price" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label><strong>Giá khuyến mãi (*)</strong></label>
                                            <input type="number" value={pricesale}
                                                onChange={(e) => setPriceSale(e.target.value)} min="10000" name="pricesale" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label><strong>Số lượng (*)</strong></label>
                                            <input type="number" value={qty}
                                                onChange={(e) => setQty(e.target.value)} min="1" name="qty" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="box-container mt-2 bg-white">
                                    <div class="box-header py-1 px-2 border-bottom">
                                        <strong>Hình đại diện(*)</strong>
                                    </div>
                                    <div class="box-body p-2 border-bottom">
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            className="form-control"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit