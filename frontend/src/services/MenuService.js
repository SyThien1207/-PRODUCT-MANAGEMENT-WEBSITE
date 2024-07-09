import httpAxios from "../httpAxios"

const MenuService = {
  index: () => {
    return httpAxios.get(`menu/index`);
  },
  show: (id) => {
    return httpAxios.get(`menu/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`menu/store`, data);
  },
update: (data, id) => {
  return httpAxios.put(`menu/update/${id}`, data);
},
  destroy: (id) => {
    return httpAxios.delete(`menu/${id}`);
  },
 
};
export default MenuService;