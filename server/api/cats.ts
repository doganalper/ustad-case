import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const { catApiKey } = useRuntimeConfig(event);
  const headers = new Headers();
  headers.set("x-api-key", catApiKey);

  const response = await fetch("https://api.thecatapi.com/v1/images/search", {
    headers,
  });

  return response.json();
});
