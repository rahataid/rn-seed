import { HOST_API } from '@config';
import axios from 'axios';

// ----------------------------------------------------------------------

export const api = axios.create({ baseURL: HOST_API });

api.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export const endpoints = {
  example: {
    list: '/example',
  },
};
