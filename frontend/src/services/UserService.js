import httpAxios from "../httpAxios";

const UserService = {
  index: () => {
    return httpAxios.get(`users/index`);
  },
  show: (id) => {
    return httpAxios.get(`users/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`users/store`, data);
  },
  update: (data, id) => {
    return httpAxios.put(`users/update/${id}`, data);
  },
  destroy: (id) => {
    return httpAxios.delete(`users/${id}`);
  },
};

export default UserService;
