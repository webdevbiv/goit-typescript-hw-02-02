import axios from "axios";

const UNSPLASH_BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_API_ACCESS_KEY;

export const fetchImages = async (query, page = 1, signal) => {
  const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
      orientation: "landscape",
    },
    signal,
  });

  return response.data;
};
