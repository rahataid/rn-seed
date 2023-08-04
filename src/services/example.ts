import { api, endpoints } from '@utils/axios';

const ExampleService = {
  list: (params?: any) => api.get(endpoints.example.list, { params }),
};

export default ExampleService;
