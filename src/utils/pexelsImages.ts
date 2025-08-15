// Pexels image search and download utility
const PEXELS_API_KEY = 'PnZA72E3BS2Iod8OM6FtdADHlwMDp44lEd2oYrjyKQWJ09zaps2KJAms';

interface PexelsImage {
  id: number;
  url: string;
  photographer: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
  };
}

interface PexelsResponse {
  photos: PexelsImage[];
}

// Image search queries for each SB8J-1 page
export const imageQueries = {
  'home': 'indigenous people nature conservation',
  'about': 'indigenous community meeting',
  'news': 'indigenous people gathering news',
  'documents': 'indigenous documents traditional knowledge',
  'resources': 'indigenous people resources nature',
  'sb8j-about': 'indigenous people biodiversity conservation',
  'sb8j-statements': 'indigenous people speaking conference',
  'sb8j-documents': 'indigenous documents governance',
  'sb8j-media-coverage': 'indigenous people media interview',
  'sb8j-news': 'indigenous people news gathering',
  'sb8j-press-conferences': 'indigenous people press conference',
  'sb8j-social-toolkit': 'indigenous people social media',
  'sb8j-articles': 'indigenous people reading writing',
  'sb8j-videos': 'indigenous people video storytelling',
  'sb8j-side-events': 'indigenous people community gathering',
  'sbstta27': 'scientific advisory biodiversity meeting'
} as const;

export const fallbackImages = {
  'home': '/src/assets/hero-banner-indigenous.jpg',
  'about': '/src/assets/indigenous-governance.jpg',
  'news': '/src/assets/indigenous-voices.jpg',
  'documents': '/src/assets/indigenous-documents.jpg',
  'resources': '/src/assets/indigenous-traditional-knowledge.jpg',
  'sb8j-about': '/src/assets/indigenous-nature-conservation.jpg',
  'sb8j-statements': '/src/assets/indigenous-voices.jpg',
  'sb8j-documents': '/src/assets/indigenous-documents.jpg',
  'sb8j-media-coverage': '/src/assets/indigenous-media.jpg',
  'sb8j-news': '/src/assets/indigenous-voices.jpg',
  'sb8j-press-conferences': '/src/assets/indigenous-press.jpg',
  'sb8j-social-toolkit': '/src/assets/indigenous-social-media.jpg',
  'sb8j-articles': '/src/assets/indigenous-traditional-knowledge.jpg',
  'sb8j-videos': '/src/assets/indigenous-video-storytelling.jpg',
  'sb8j-side-events': '/src/assets/indigenous-community-gathering.jpg',
  'sbstta27': '/src/assets/sbstta-event.jpg'
} as const;

export const searchPexelsImages = async (query: string, perPage: number = 5): Promise<PexelsImage[]> => {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch images from Pexels');
    }

    const data: PexelsResponse = await response.json();
    return data.photos;
  } catch (error) {
    console.error('Error fetching Pexels images:', error);
    return [];
  }
};

export const getImageForPage = async (pageKey: keyof typeof imageQueries): Promise<string | null> => {
  const query = imageQueries[pageKey];
  const images = await searchPexelsImages(query, 1);
  
  if (images.length > 0) {
    // Return the large version for hero backgrounds
    return images[0].src.large2x;
  }
  
  return null;
};
