import httpAxios from "../httpAxios";

const OrderService = {
  index: () => {
    return httpAxios.get(`orders/index`);
  },
  show: (id) => {
    return httpAxios.get(`orders/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`orders/store`, data);
  },
  update: (data, id) => {
    return httpAxios.put(`orders/update/${id}`, data);
  },
  destroy: (id) => {
    return httpAxios.delete(`orders/${id}`);
  },
};

export default OrderService;
