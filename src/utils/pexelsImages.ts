const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

// Simple cache to avoid hitting the API too often
const cache: { [key: string]: string } = {};

export const fallbackImages: { [key: string]: string } = {
  'home': '/assets/hero-banner.jpg',
  'about': '/assets/about-hero.jpg',
  'statements': '/assets/statements-hero.jpg',
  'documents': '/assets/documents-hero.jpg',
  'news': '/assets/news-hero.jpg',
  'side-events': '/assets/side-events-hero.jpg',
  'sb8j-statements': '/assets/statements-hero.jpg',
  'sb8j-documents': '/assets/documents-hero.jpg',
  'sb8j-news': '/assets/news-hero.jpg',
  'sb8j-side-events': '/assets/side-events-hero.jpg'
};

export const imageQueries = {
  'home': 'indigenous people biodiversity nature conservation',
  'about': 'indigenous community traditional knowledge',
  'statements': 'indigenous council meeting governance',
  'documents': 'indigenous documents traditional knowledge',
  'news': 'indigenous community news gathering',
  'side-events': 'indigenous community workshop meeting',
  'sb8j-statements': 'indigenous people meeting governance',
  'sb8j-documents': 'indigenous documents meeting',
  'sb8j-news': 'indigenous community news update',
  'sb8j-side-events': 'indigenous workshop community gathering'
};

export const getImageForPage = async (pageKey: keyof typeof imageQueries): Promise<string | null> => {
  if (!PEXELS_API_KEY) {
    console.warn('Pexels API key is missing. Please set the NEXT_PUBLIC_PEXELS_API_KEY environment variable.');
    return null;
  }

  if (cache[pageKey]) {
    return cache[pageKey];
  }

  const query = imageQueries[pageKey];
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      console.error('Pexels API error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();

    if (data.photos && data.photos.length > 0) {
      const imageUrl = data.photos[0].src.large2x || data.photos[0].src.large || data.photos[0].src.original;
      cache[pageKey] = imageUrl; // Store in cache
      return imageUrl;
    } else {
      console.warn('No photos found for query:', query);
      return null;
    }
  } catch (error) {
    console.error('Error fetching image from Pexels:', error);
    return null;
  }
};
