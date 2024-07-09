import httpAxios from "../httpAxios"

const ConfigService = {
    index: () => {
        return httpAxios.get(`config/index`);
      },
      show: (id) => {
        return httpAxios.get(`config/show/${id}`);
      },
    
      update: (data, id) => {
        return httpAxios.put(`config/update/${id}`, data);
      },
  
};
export default ConfigService;