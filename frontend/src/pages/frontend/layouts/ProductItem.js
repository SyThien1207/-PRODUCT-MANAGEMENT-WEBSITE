import React from 'react'
import { urlImage } from '../../../config'
export default function ProductItem({ product }) {
    return (
        <div className="product-item border">
            <div className="product-item-image">
                <a href="product_detail.html">
                    <img style={{ width: "350px", height: "350px" }} src={urlImage + "product/" + product.image} className="img-fluid" alt='' id="img1" />
                    <img style={{ width: "350px", height: "350px" }} className="img-fluid" src={urlImage + "product/" + product.image} alt='' id="img2" />
                </a>
            </div>
            <h2 className="product-item-name text-main text-center fs-5 py-1">
                <a href="product_detail.html">{product.name}</a>
            </h2>
            <h3 className="product-item-price">
                {/* <div className="flex-fill"><del>200.000đ</del></div> */}
                <div style={{ textAlign: "center" }}>{product.price}</div>
            </h3>
        </div>
    )
}
