import React from "react";
import "./Game.css";
import { getLogo } from "../utils";

const Game = ({ game }) => {
  var parse = require("html-react-parser");
  return (
    <div className="Game card mt-3" style={{ width: "18rem" }}>
      <img
        src={game.background_image}
        className="card-img-top"
        style={{ height: "12rem" }}
        alt="..."
      />
      <div className="card-body">
        {game.parent_platforms.map((platform) =>
          parse(getLogo(platform.platform.slug))
        )}
        <h5 className="card-title font-weight-bold">{game.name}</h5>
      </div>
      <div className="btn-body">
        <button className="btn">
          <i class="fa fa-plus"></i>&nbsp;&nbsp;{game.added}
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
