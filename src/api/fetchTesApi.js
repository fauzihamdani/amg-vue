import { fetchApi } from "./fetchApi";

export default async function fetchTesApi() {
  return await fetchApi(`https://jsonplaceholder.typicode.com/posts`);
}
