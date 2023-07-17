import axios from 'axios';

const API_KEY = '34964611-89c8b59fd1bb99eb808496787';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: API_KEY,
    per_page: 12,
  },
});

export const searchImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  return data;
};
