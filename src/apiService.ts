// import {API_BASE_URL, API_KEY} from '@env';

const API_BASE_URL = 'https://www.rijksmuseum.nl/api/en';
const API_KEY = 'QHrIvcLh';

// Api call for getting artwork data
export const fetchArtworks = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/collection?key=${API_KEY}&format=json`,
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Failed to fetch artworks');
    }
    return data.artObjects;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    throw new Error('Failed to fetch artworks');
  }
};

// Api call for getting description of clicked image
export const fetchArtworkDetails = async (artworkId: any) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/collection/${artworkId}?key=${API_KEY}&format=json`,
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Failed to fetch artwork details');
    }
    return data;
  } catch (error) {
    console.error('Error fetching artwork details:', error);
    throw new Error('Failed to fetch artwork details');
  }
};
