import React from "react";

const AddToCartOverlay: React.FC = () => {
  return (
    <div className="flex absolute top-2/4 left-2/4 justify-center items-center w-44 -translate-x-2/4 -translate-y-2/4 bg-stone-400 h-[221px] opacity-85 rounded-[50%/60%] cursor-pointer z-10">
      <p className="text-sm text-center text-white tracking-[3.36px]">
        <span>Add To</span>
        <br />
        <span>Cart</span>
      </p>
    </div>
  );
};

export default AddToCartOverlay;
