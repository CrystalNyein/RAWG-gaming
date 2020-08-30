import React from "react";
import "./Game.css";
import { getLogo } from "../utils";

const Game = ({ game, setGameClick, setGameInfo }) => {
  var parse = require("html-react-parser");
  const openGame = () => {
    setGameClick(true);
    setGameInfo(game);
  };
  return (
    <div className="Game card my-3" style={{ width: "18rem" }}>
      <img
        src={game.background_image}
        className="card-img-top"
        style={{ height: "12rem" }}
        alt={game.name}
      />
      <div className="card-body">
        {game.parent_platforms.map((platform) =>
          parse(getLogo(platform.platform.slug))
        )}
        <h5 className="card-title font-weight-bold" onClick={openGame}>
          {game.name}
        </h5>
      </div>
      <div className="btn-body">
        <button className="btn font-weight-bold" onClick={openGame}>
          More info &nbsp;<i class="fas fa-chevron-right"></i>
        </button>
      </div>
      {/*<ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>*/}
    </div>
  );
};

export default Game;
