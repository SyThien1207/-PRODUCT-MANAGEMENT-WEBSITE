import httpAxios from "../httpAxios"

const ProductSaleService = {
  index: () => {
    return httpAxios.get(`ProductSaleService/index`);
  },
  show: (id) => {
    return httpAxios.get(`ProductSaleService/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`ProductSaleService/store`, data);
  },
update: (data, id) => {
  return httpAxios.put(`ProductSaleService/update/${id}`, data);
},
  destroy: (id) => {
    return httpAxios.delete(`ProductSaleService/${id}`);
  },
};
export default ProductSaleService;