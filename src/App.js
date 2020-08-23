import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import StartPage from "./components/StartPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <StartPage />
    </div>
  );
}

export default App;
