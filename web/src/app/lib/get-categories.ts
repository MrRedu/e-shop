import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export const getCategories = async () => {
  const result = await query("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url");

  const categories = result.data.map((category) => {
    return {
      name: category.name,
      description: category.description,
      slug: category.slug,
      image: {url: `${STRAPI_HOST}${category.image.url}`}
    }
  });

  return {data: categories, meta: result.meta}; 
}