import React from "react";
import CatalogGrid from "./CatalogGrid";

const CreatorBestsellers = () => {
  return (
    <section className="py-10 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center md:mb-16 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0C0407] font-inter">
            Our Bestsellers
          </h2>
          <p className="text-[16px] text-[#0C0407] max-w-2xl mx-auto font-inter">
            Hi there! We're Prachi and Harsh, adventure enthusiasts and
            storytellers (previously known as "Two Tickets To Freedom")
          </p>
        </div>
        <CatalogGrid/>
      </div>
    </section>
  );
};

export default CreatorBestsellers;
