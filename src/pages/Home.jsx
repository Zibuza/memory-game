import React from "react";
import ThemeGridButton from "../Components/ThemeGridButton";
import Label from "../Components/Label";
import Logo from "../Components/Logo";
import Players from "../Components/Players";
import useChooseBetween from "../Hooks/ChoooseBetween";
import { useNavigate } from "react-router-dom";




export default function Home() {
  const [theme, setTheme] = React.useState("Numbers");
  const numbers = React.useRef(null);
  const icons = React.useRef(null);

  const [grid, setGrid] = React.useState("4x4");
  const four = React.useRef(null);
  const six = React.useRef(null);

  const [players, setPlayers] = React.useState(1);
  const solo = React.useRef(null);
  const duo = React.useRef(null);
  const trio = React.useRef(null);
  const squad = React.useRef(null);
  const buttons = [solo, duo, trio, squad];

  const navigate = useNavigate();

  // Function to handle player change
  const changePlayers = (event) => {
    let target = event.target;
    buttons.forEach((but) => {
      but.current?.classList.remove("first:!bg-darkest", "!bg-darkest");
    });
    target.classList.add("!bg-darkest");
    setPlayers(Number(target.innerText));
  };

  // Creating Functions using Custom Hook
  const changeTheme = useChooseBetween(
    theme,
    setTheme,
    "Numbers",
    "Icons",
    numbers,
    icons
  );
  const changeGrid = useChooseBetween(grid, setGrid, "4x4", "6x6", four, six);

  return (
    <div className="bg-darkest flex items-center justify-evenly flex-col h-screen w-screen">
      
      <div className="flex flex-col content-evenly w-full">
        <Logo />
        <div className="sm:hidden mx-auto mt-6 mb-6">
          
        </div>
      </div>
      <div className="w-11/12 max-w-2xl bg-darkwhite rounded-3xl p-4 md:p-10 relative">
        <div>
          <Label text="Select Theme" />
          <div className="flex justify-between mt-3 md:mt-4">
            <ThemeGridButton text="Numbers" save={numbers} onClick={changeTheme} />
            <ThemeGridButton text="Icons" save={icons} onClick={changeTheme} />
          </div>
        </div>
        <div className="pt-6 md:pt-8">
          <Label text="Numbers of Players" />
          <div className="flex justify-between mt-3 md:mt-4">
            <Players text="1" save={solo} onClick={changePlayers} />
            <Players text="2" save={duo} onClick={changePlayers} />
            <Players text="3" save={trio} onClick={changePlayers} />
            <Players text="4" save={squad} onClick={changePlayers} />
          </div>
        </div>
        <div className="pt-6 md:pt-8">
          <Label text="Grid Size" />
          <div className="flex justify-between mt-3 md:mt-4">
            <ThemeGridButton text="4x4" save={four} onClick={changeGrid} />
            <ThemeGridButton text="6x6" save={six} onClick={changeGrid} />
          </div>
        </div>
        <button
          onClick={() => {
            navigate(`/${theme}/${players}/${grid}/0`);
          }}
          className="flex items-center justify-center bg-orange text-darkwhite font-bold text-lg md:text-5x w-full h-12 md:h-16 mt-8 rounded-3xl hover:bg-lightorange cursor-pointer"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
