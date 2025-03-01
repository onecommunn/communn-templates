"use client";
import * as React from "react";

const SendButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="flex overflow-hidden gap-6 items-center self-start py-3.5 pr-7 pl-7 mt-5 rounded-3xl border border-solid border-[color:var(--color-3,#27282C)] text-zinc-800 tracking-[3.36px] max-md:px-5 hover:bg-stone-200 transition-colors"
    >
      <span className="self-stretch my-auto">Send Message</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6c053d41132b4e5ca5f6f01a5f7b483c/55ee5e561fafb24bd4a800fb5020999ae9b69bfe1507f2bd826183be45c11d4b?placeholderIfAbsent=true"
        alt="Send arrow"
        className="object-contain shrink-0 self-stretch my-auto aspect-[3.57] stroke-[1px] stroke-zinc-800 w-[25px]"
      />
    </button>
  );
};

export default SendButton;
