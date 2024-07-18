// src/scripts/api.js
const API_URL = process.env.API_URL || 'http://localhost:5000/api';

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/data`);
  const data = await response.json();
  return data;
};
