import React from "react";

interface IProps {
  title?: string;
  url?: string;
  description?: string;
}

export default function UseCaseCard(props: IProps) {
  return (
    <div className="p-4">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <img src={props?.url} alt="" className="w-full rounded-md" />
        <p className="text-xs md:text-sm uppercase font-medium pt-2 text-center text-black">
          i’m A
        </p>
        <h3 className="text-base md:text-2xl font-bold p-2 text-center text-black">
          {props?.title}
        </h3>
        <p className="text-sm text-gray-600 p-2 text-center">
          {props?.description}
        </p>
      </div>
    </div>
  );
}
