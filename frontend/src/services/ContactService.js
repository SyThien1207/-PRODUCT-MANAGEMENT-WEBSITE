import httpAxios from "../httpAxios"

const ContactService = {
    index: () => {
        return httpAxios.get(`contacts/index`);
      },
      show: (id) => {
        return httpAxios.get(`contacts/show/${id}`);
      },
      store: (data) => {
        return httpAxios.post(`contacts/store`, data);
      },
      update: (data, id) => {
        return httpAxios.put(`contacts/update/${id}`, data);
      },
      destroy: (id) => {
        return httpAxios.delete(`contacts/${id}`);
      },
};
export default ContactService;
