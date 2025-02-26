export const API_URL = import.meta.env.VITE_API_URL;
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

if (!API_BASE_URL) {
  console.warn('VITE_API_URL is not defined in environment variables');
}

if (!API_URL) {
    console.warn('VITE_API_URL is not defined in environment variables');
  }
  

