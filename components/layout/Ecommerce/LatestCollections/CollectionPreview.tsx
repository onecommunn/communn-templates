
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";

interface Collection {
  text: string
  imageUrl: HeaderLogo
  path: string
}

const CollectionPreview = ({ collection }: { collection: Collection }) => {
  return (
    <Link
      href={`${collection.path}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        {/* <div className="flex flex-col txt-compact-medium mt-4 justify-between">
        <div className="flex items-center justify-between">
          <div className="flex flex-col max-w-fit">
          </div>
        </div>
      </div> */}
        <Image src={collection.imageUrl} alt={collection.text} className="object-cover w-full" width={360} height={360}/>
      </div>
    </Link>
  )
}

export default CollectionPreview
