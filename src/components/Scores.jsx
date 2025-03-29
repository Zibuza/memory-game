import React, { useRef, useState, useEffect } from "react";
import Score from "./Score";


export default function Scores({ players, points, moves, turn, finish, setT, grid, theme }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState("0");
  const [res, setRes] = useState(false);
  const ref = useRef(null);

  function addData() {
    console.log(theme);
    axios.post(`${REACT_APP_API}${grid}`, {

      seconds: seconds - 1,
      minutes,
      hours,
      moves,
      theme,
    });
  }

  useEffect(() => {
    if (ref.current?.children[turn] !== undefined) {
      for (let i = 0; i < players; i++) {
        ref.current?.children[i].classList.remove("!bg-orange");
        ref.current?.children[i].children[0].classList.remove("!text-darkwhite");
        ref.current?.children[i].children[1].classList.remove("!text-darkwhite");
      }
      ref.current?.children[turn].classList.add("!bg-orange");
      ref.current?.children[turn].children[0].classList.add("!text-darkwhite");
      ref.current?.children[turn].children[1].classList.add("!text-darkwhite");
    }
  });

  useEffect(() => {
    if (!finish) {
      let sec = setInterval(() => {
        setSeconds((prev) => (prev === 59 ? 0 : prev + 1));
      }, 1000);
      return () => clearInterval(sec);
    } else {
      if (!res) {
        setSeconds((prev) => prev - 1);
        setRes(true);
        if (localStorage.getItem(REACT_APP_TOKEN || "") !== null) {
          addData();
        }
      }
    }
  }, [seconds]);

  useEffect(() => {
    if (!finish) {
      let min = setInterval(() => {
        setMinutes((prev) => (prev === 59 ? 0 : prev + 1));
      }, 60000);
      return () => clearInterval(min);
    }
  }, [minutes]);

  useEffect(() => {
    if (!finish) {
      let hour = setInterval(() => {
        setHours((prev) => prev + 1);
      }, 3600000);
      return () => clearInterval(hour);
    }
  }, [hours]);

  useEffect(() => {
    if (minutes < 1 && hours < 1) {
      setTime(`${seconds}`);
    } else if (hours < 1) {
      setTime(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
    } else {
      setTime(`${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
    }
  }, [seconds]);

  useEffect(() => {
    setT(time);
  }, [time]);

  return players > 1 ? (
    <div ref={ref} className="flex justify-evenly w-full md:justify-evenly md:mt-20 lg:flex-col lg:gap-4 lg:w-fit 2xl:w-full 2xl:gap-0 2xl:flex-row">
      {points.map((point, index) => (
        <Score point={point[0]} player={index} key={`p${index}`} />
      ))}
    </div>
  ) : (
    <div className="flex justify-between w-full md:justify-center gap-8 md:mt-20 lg:flex-col lg:gap-4 lg:w-fit 2xl:w-full 2xl:gap-0 2xl:flex-row">
      <div className="h-16 w-5/12 flex flex-col justify-evenly items-center bg-newgame rounded-xl md:w-80 md:h-20 md:flex-row">
        <p className="text-grey font-bold text-base">Time</p>
        <p className="text-darkgrey font-bold text-2xl">{time}</p>
      </div>
      <div className="h-16 w-5/12 flex flex-col justify-evenly items-center bg-newgame rounded-xl md:w-80 md:h-20 md:flex-row">
        <p className="text-grey font-bold text-base">Moves</p>
        <p className="text-darkgrey font-bold text-2xl">{moves}</p>
      </div>
    </div>
  );
}
