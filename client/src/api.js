export const API = import.meta.env.VITE_API_URL || "http://localhost:3060/api";

export async function api(path, options = {}) {
  const response = await fetch(`${API}${path}`, options);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}
