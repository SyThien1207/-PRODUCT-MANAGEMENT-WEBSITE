import httpAxios from "../httpAxios";

const EvaluateService = {
  index: () => {
    return httpAxios.get(`evalute/index`);
  },
  store: (data) => {
    return httpAxios.post(`evalute/store`, data);
  },
};

export default EvaluateService;
