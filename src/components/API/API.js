import axios from 'axios';

export const workingURL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = workingURL;

export const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};
