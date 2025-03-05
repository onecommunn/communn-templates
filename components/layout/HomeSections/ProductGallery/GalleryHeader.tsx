import React from "react";

interface GalleryHeaderProps {
  title: string;
  subtitle: string;
}

const GalleryHeader: React.FC<GalleryHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mb-16 text-center">
      <h1 className="mb-1.5 text-7xl text-zinc-800 max-md:text-5xl max-sm:text-4xl">
        {title}
      </h1>
      <p className="text-sm leading-7 text-zinc-800 max-sm:px-5 max-sm:py-0">
        {subtitle}
      </p>
    </header>
  );
};

export default GalleryHeader;
