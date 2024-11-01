import { Pagination } from "@/app/components/Pagination";
import { Section } from "@/app/components/Section";
import { getProducts } from "@/app/lib/get-products";
import Image from "next/image";
import Link from "next/link";

const PAGE_SIZE_TO_SHOW = 2

export default async function CategoryPage({ params, searchParams }:
  { params: Promise<{ slug: string }>, searchParams: { [key: string]: string | string[] | undefined } }
) {
  const { slug } = await params
  const { data, meta } = await getProducts({ category: slug, page: 1, pageSize: PAGE_SIZE_TO_SHOW });

  if (data.length === 0) return (
    <Section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">No se ha encontrado ningún producto</h2>
      <Link href="/categories" className="rounded-md max-w-[320px] mt-6 bg-gray-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Volver</Link>
    </Section>
  )

  return (
    <Section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.length > 0 && data.map(({ name, description, slug, color, stock, price, isActive, image }, index) => (
          <div key={slug} className="relative flex flex-col bg-white shadow-md rounded-lg ">
            <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
              <Image
                src={image.url}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={name}
                className="h-full w-full object-cover rounded-md"
                priority={index < 3}
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-xl font-semibold">
                  {name}
                </p>
                <p className="text-amber-700 text-xl font-semibold">
                  ${price}
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                {description}
              </p>
              <button className="rounded-md w-full mt-6 bg-gray-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        )
        )}
      </div>
      {/* <Pagination page={page} pageSize={PAGE_SIZE_TO_SHOW} pageCount={1} total={meta.pagination.total} /> */}
    </Section>
  )
};
