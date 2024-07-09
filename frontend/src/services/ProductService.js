import httpAxios from "../httpAxios"

const ProductService = {
  index: () => {
    return httpAxios.get(`products/index`);
  },
  show: (id) => {
    return httpAxios.get(`products/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`products/store`, data);
  },
  update: (data, id) => {
    return httpAxios.put(`products/update/${id}`, data);
  },
  destroy: (id) => {
    return httpAxios.delete(`products/${id}`);
  },
  status: (id) => {
    return httpAxios.get(`products/status/${id}`);
  },
  delete: (id) => {
    return httpAxios.get(`products/delete/${id}`);
  },
  restore: (id) => {
    return httpAxios.get(`products/restore/${id}`);
  },
  productcategory: (id) => {
    return httpAxios.get(`products/productcategory/${id}`);
  },
  productnew: (limit) => {
    return httpAxios.get(`products/productnew/${limit}`);
  },
  productsale: (limit) => {
    return httpAxios.get(`product/productsale/${limit}`);
  },
  producthotbuy: (limit) => {
    return httpAxios.get(`product/producthotbuy/${limit}`);
  }
};
export default ProductService;