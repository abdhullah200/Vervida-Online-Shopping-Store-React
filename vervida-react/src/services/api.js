import axios from 'axios';
import { mockProducts } from '../data/mockProducts';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Since the fake API might not have sufficient data, we'll use mock data
export const productService = {
  getAllProducts: async () => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { data: mockProducts };
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  
  getProductsByCategory: async (category) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const filteredProducts = category === 'all' 
        ? mockProducts 
        : mockProducts.filter(product => product.category === category);
      return { data: filteredProducts };
    } catch (error) {
      throw error;
    }
  }
};

export default api;