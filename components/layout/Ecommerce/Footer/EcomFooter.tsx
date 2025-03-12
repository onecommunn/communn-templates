import Link from "next/link";

interface ProductCategories {
  name: string;
  path: string;
}

export default function EcomFooter({
  productCategories,
  collections,
}: {
  productCategories: ProductCategories[];
  collections: ProductCategories[];
}) {
  return (
    <footer className="border-t border-ui-border-base w-full px-20">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 sm:flex-row items-start justify-between py-40">
          <div>
            <Link href="/" className="text-black uppercase font-bold">
              Chennis Store
            </Link>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-black">Categories</span>
                <ul>
                  {productCategories.map((item,index) => (
                    <li key={index}>
                      <Link href={item.path} className="text-gray-600 text-xs hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-black">
                  Collections
                </span>
                <ul>
                  {collections.map((item,index) => (
                    <li key={index}>
                      <Link href={item.path} className="text-gray-600 text-xs hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <p className="text-black">
            © {new Date().getFullYear()} Chennis Store. All rights reserved.
          </p>
          {/* <MedusaCTA /> */}
        </div>
      </div>
    </footer>
  );
}
