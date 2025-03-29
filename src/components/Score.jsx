import React from "react";

export default function Score({ score, playerIndex }) {
  return (
    <div className="s w-16 md:w-40 md:h-20 rounded-lg h-20 bg-newgame flex flex-col justify-center items-center gap-3">
      <p className="text-grey font-bold text-base" aria-label={`Player ${playerIndex + 1}`}>
        {window.innerWidth >= 768 ? `Player ${playerIndex + 1}` : `P${playerIndex + 1}`}
      </p>
      <p className="text-darkgrey font-bold text-2xl">{score}</p>
    </div>
  );
}
