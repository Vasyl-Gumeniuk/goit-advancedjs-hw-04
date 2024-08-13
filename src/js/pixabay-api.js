import axios from 'axios';

const API_KEY = '25798215-b5224b890c985f6c53280bcb2';
const URL = 'https://pixabay.com/api/?';

export function fetchImages(query, currentPage) {
  const axiosConfigs = {
    params: {
      key: API_KEY,
      q: query,
      page: currentPage,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(`${URL}`, axiosConfigs);
}
