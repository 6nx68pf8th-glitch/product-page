import { ApiResponse } from '../types/api';

const API_URL = 'https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise';
const API_KEY = '8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc'; // Ensure this is set in your environment

export const fetchProducts = async (): Promise<ApiResponse> => {
  if (!API_KEY) {
    throw new Error('API key is not configured');
  }

  const response = await fetch(API_URL, {
    method: 'GET', // Explicitly set the method
    headers: {
      'x-api-key': API_KEY,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(`Failed to fetch products: ${errorData.message || response.statusText}`);
  }

  return response.json();
};
