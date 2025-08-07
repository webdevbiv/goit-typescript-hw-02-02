export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
