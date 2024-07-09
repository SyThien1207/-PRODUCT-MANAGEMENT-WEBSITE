import httpAxios from "../httpAxios";

const CategoryService = {
  index: () => {
    return httpAxios.get(`categories/index`);
  },
  show: (id) => {
    return httpAxios.get(`categories/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`categories/store`, data);
  },
  update: (data, id) => {
    return httpAxios.put(`categories/update/${id}`, data);
  },
  destroy: (id) => {
    return httpAxios.delete(`categories/${id}`);
  },
};
export default CategoryService;
