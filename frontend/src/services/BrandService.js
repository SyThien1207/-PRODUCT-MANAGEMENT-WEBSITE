import httpAxios from "../httpAxios"

const BrandService = {
  index: () => {
    return httpAxios.get(`brands/index`);
  },
  show: (id) => {
    return httpAxios.get(`brands/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`brands/store`, data);
  },
update: (data, id) => {
  return httpAxios.put(`brands/update/${id}`, data);
},
  destroy: (id) => {
    return httpAxios.delete(`brands/${id}`);
  },
};
export default BrandService;