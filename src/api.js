import axios from 'axios';
import { API_TOKEN, BASE_URL } from './config';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`
  }
});

export default tmdbApi;
