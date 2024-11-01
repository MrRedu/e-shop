import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export async function getHomeInfo() {
  const {data: {title, description, cover}} = await query("home?populate=cover");

  return {
    title,
    description,
    image: `${STRAPI_HOST}${cover.url}`,
  }
}