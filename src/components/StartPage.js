import React from "react";
import Nav from "./Nav";
import "./StartPage.css";
import SideNav from "./SideNav";
import GameLists from "./GameLists";

const StartPage = () => {
  return (
    <div className="StartPage container-fluid">
      <div className="d-flex flex-row justify-content-start">
        <SideNav />
        <div className="text-white gameLists">
          <GameLists />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
