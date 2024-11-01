import Image from "next/image";
import { getCategories } from "../lib/get-categories";
import { Section } from "./Section"
import Link from "next/link";

export const Categories = async () => {
  const { data: categories, meta } = await getCategories();
  if (categories.length === 0) return null
  return (
    <Section>
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map(({ name, description, image, slug }: any) => (
          <Link href={`/categories/${slug}`} key={slug} className="relative flex flex-col bg-white shadow-md rounded-lg ">
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <Image
                src={image.url}
                width={1380}
                height={736}
                alt="image"
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  {name}
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
};
