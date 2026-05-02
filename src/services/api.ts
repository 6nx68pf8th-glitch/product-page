import { ApiResponse } from '../types/api';

const API_URL = 'https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise';
const API_KEY = '8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc';

export const fetchProducts = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL, {
    headers: {
      'x-api-key': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};
