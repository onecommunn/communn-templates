import React from "react"
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import Image from "next/image";

interface GridImage {
  id: number
  imageUrl: HeaderLogo
  link: string
}


const EcomCategory = ({imagesList,categoryName}:{imagesList:GridImage[],categoryName:string}) => {
//   const mensImages : GridImage[] = [
//     {
//       id: 1,
//       imageUrl:
//         "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-1735907878.jpg",
//       link: `/categories/oversized-t-shirt-men`,
//     },
//     {
//       id: 2,
//       imageUrl:
//         "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-1735907894.jpg",
//       link: `/categories/hoodies-for-men`,
//     },
//     {
//       id: 3,
//       imageUrl:
//         "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Joggers-1735907896.jpg",
//       link: `/categories/oversized-joggers-men`,
//     },
//     {
//       id: 4,
//       imageUrl:
//         "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-1735907918.jpg",
//       link: `/categories/${categoryName.toLowerCase()}`,
//     },
//     {
//       id: 5,
//       imageUrl:
//         "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Classic-Fit-T-Shirts-1735907878.jpg",
//       link: `/categories/${categoryName.toLowerCase()}`,
//     },
//     {
//       id: 6,
//       imageUrl:
//         "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Men--1--1735908077.jpg",
//       link: `/categories/${categoryName.toLowerCase()}`,
//     },
//   ]

//   const womenImages : GridImage[] = [
//     {
//       id:1,
//       imageUrl:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-women-1735907920.jpg",
//       link:"/categories/oversized-t-shirt-women"
//     },
//     {
//       id:2,
//       imageUrl:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-women-1735907956.jpg",
//       link:"/categories/women-hoodies-and-sweatshirts"
//     },
//     {
//       id:3,
//       imageUrl:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Joggers-women-1735907920.jpg",
//       link:"/categories/women-joggers-sweatpants"
//     },
//     {
//       id:4,
//       imageUrl:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-women-1735907956.jpg",
//       link:""
//     },
//     {
//       id:5,
//       imageUrl:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Desktop-CFT-1739271885.jpg",
//       link:""
//     },
//     {
//       id:6,
//       imageUrl:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-1735908017.jpg",
//       link:""
//     },
//   ]

  return (
    <div className="relative w-full mx-auto px-0">
      <div className="text-center py-6">
        <h3 className="text-2xl md:text-2xl font-bold text-black relative inline-block">
          Shop By Category - {categoryName}
          {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/10 rounded-full"></span> */}
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-0">
        {imagesList.map((item,index) => (
          <a
            key={index}
            href={item.link}
            className="block relative bg-gray-100"
          >
            <Image
              src={item.imageUrl}
              alt=""
              className="min-w-full min-h-[390px]"
              width={100}
              height={200}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default EcomCategory