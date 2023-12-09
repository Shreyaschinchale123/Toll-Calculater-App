// src/services/tollService.js
import axios from 'axios';

const API_KEY = 'in_1OLJL2GEIl7lYz5dxC5kmtTP';
const API_URL = 'https://api.tollguru.com/v1/calc/route';

export const calculateToll = async (waypoints) => {
  try {
    const response = await axios.post(API_URL, {
      waypoints,
      apiKey: API_KEY,
    });
    return response.data;
  } catch (error) {
    console.error('Error calculating toll:', error);
    throw error;
  }
};
