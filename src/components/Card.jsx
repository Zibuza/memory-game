import React from "react";

export default function Card({
  id,
  content,
  checked,
  opened,
  onClick,
}) {
  return (
    <div
      onClick={() => onClick(id, checked, opened)}
      className={`${opened && "!bg-lightgrey pointer-events-none"} ${
        checked && "!bg-orange"
      } w-full rounded-full aspect-square bg-darkgrey flex items-center justify-center font-bold text-darkwhite text-2xl cursor-pointer md:text-5xl md:hover:bg-bluegrey lg:text-2xl 2xl:text-5xl`}
    >
      {(checked || opened) && content}
    </div>
  );
}
