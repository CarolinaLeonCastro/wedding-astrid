import axios from 'axios';

interface UserData {
  email: string;
  password: string;
  name?: string;
}

interface WeddingData {
  title: string;
  date: Date;
  location: string;
  description?: string;
}

const API_URL = 'http://localhost:5000/api';

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (userData: UserData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const login = async (userData: UserData) => {
  const response = await api.post('/auth/login', userData);
  return response.data;
};

export const createWedding = async (weddingData: WeddingData) => {
  const response = await api.post('/weddings', weddingData);
  return response.data;
};

export const getWeddings = async () => {
  const response = await api.get('/weddings');
  return response.data;
};
