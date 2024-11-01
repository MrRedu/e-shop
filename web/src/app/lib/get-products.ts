import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export const getProducts = async ({category = 'shirts', page, pageSize  }: 
  {category: string, pageSize: number, page: number}
) => {

  let url = `products?filters[product_category][slug][$contains]=${category}&populate=images`
  if(page) url += `&pagination[page]=${page}`
  if(pageSize) url += `&pagination[pageSize]=${pageSize}`

  const {data, meta} = await query(url);
  const products = data.map(({name, description, slug, color, stock, price, isActive, images}) => {
    return {
      name,
      description,
      slug,
      color,
      stock,
      price,
      isActive,
      image: {url: `${STRAPI_HOST}${images[0].url}`}
    }
  });

  return {data: products, meta};
}