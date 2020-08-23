import React from "react";
import Nav from "./Nav";
import "./StartPage.css";
import SideNav from "./SideNav";
import GameLists from "./GameLists";

const StartPage = () => {
  return (
    <div className="StartPage container">
      <div className="row">
        <SideNav />
        <div className="col-md-10 text-white gameLists">
          <GameLists />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
