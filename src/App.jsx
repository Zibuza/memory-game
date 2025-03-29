import React from "react";
import { Outlet } from "react-router-dom"; // Outlet to render nested routes
import './index.css';

export default function App() {
  return (
    <div>
      <h1>Memory Game</h1>
      <Outlet /> 
    </div>
  );
}
