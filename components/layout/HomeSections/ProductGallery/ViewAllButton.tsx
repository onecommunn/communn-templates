import React from "react";

interface ViewAllButtonProps {
  onClick: () => void;
  text?: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({
  onClick,
  text = "View All",
}) => {
  return (
    <div className="text-center">
      <button
        className="gap-2.5 px-7 py-3.5 text-sm tracking-wider bg-white rounded-3xl border border-solid cursor-pointer border-zinc-800 text-zinc-800"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ViewAllButton;
