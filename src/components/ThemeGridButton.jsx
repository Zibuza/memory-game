import React from "react";

export default function ThemeGridButton({ text, save, onClick }) {
  return (
    <button
      ref={save}
      onClick={onClick}
      className="bg-lightgrey first:!bg-darkest w-5/12 h-10 md:w-64 md:h-14 flex items-center justify-center rounded-3xl text-base md:text-3xl text-darkwhite font-bold cursor-pointer hover:bg-bluegrey">
      {text}
    </button>
  );
}
