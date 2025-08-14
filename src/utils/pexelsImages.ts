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
  'sb8j-about': 'ancient forest council meeting nature governance',
  'sb8j-documents': 'traditional knowledge preservation forest wisdom',
  'sb8j-news': 'indigenous nature conservation forest biodiversity',
  'sb8j-media-coverage': 'forest storytelling natural communication',
  'sb8j-social-toolkit': 'nature social media forest connectivity',
  'sb8j-press-conferences': 'forest amphitheater natural press gathering',
  'sb8j-articles': 'traditional forest wisdom indigenous voices',
  'sb8j-videos': 'forest storytelling video nature tradition',
  'sb8j-statements': 'indigenous governance forest council meeting',
  'sb8j-side-events': 'forest community gathering natural events'
};

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

// Fallback images in case Pexels API is not available
export const fallbackImages = {
  'sb8j-about': '/assets/hero-banner-indigenous.jpg',
  'sb8j-documents': '/assets/hero-banner-indigenous.jpg',
  'sb8j-news': '/assets/indigenous-nature-conservation.jpg',
  'sb8j-media-coverage': '/assets/hero-banner-indigenous.jpg',
  'sb8j-social-toolkit': '/assets/hero-banner-indigenous.jpg',
  'sb8j-press-conferences': '/assets/hero-banner-indigenous.jpg',
  'sb8j-articles': '/assets/hero-banner-indigenous.jpg',
  'sb8j-videos': '/assets/hero-banner-indigenous.jpg',
  'sb8j-statements': '/assets/hero-banner-indigenous.jpg',
  'sb8j-side-events': '/assets/hero-banner-indigenous.jpg'
};
