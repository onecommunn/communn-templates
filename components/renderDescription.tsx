import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./Ui/dialog";

const renderDescription = (
  event: string,
  title: string,
  MAX_PREVIEW_CHARS: number,
) => {
  const desc = event ?? "";
  const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

  if (!shouldTruncate) {
    return <p className="text-gray-600 mb-4">{desc}</p>;
  }

  return (
    <div className="mb-2">
      <p className="text-gray-600  line-clamp-3">{desc}</p>
      <Dialog>
        <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
          Read more
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogTitle className="capitalize">{title}</DialogTitle>
          <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
            {desc}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default renderDescription;
