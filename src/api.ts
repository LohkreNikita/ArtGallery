import axios from 'axios';

const API_BASE_URL = 'https://www.rijksmuseum.nl/api/nl';
const API_KEY = 'QHrIvcLh'; // Obtain your API key from Rijksmuseum API website

export const fetchArtworks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/collection`, {
      params: {
        key: API_KEY,
        format: 'json',
        type: 'painting', // Optionally specify type of artwork
      },
    });
    return response.data.artObjects;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return [];
  }
};
