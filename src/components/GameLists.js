import React, { useEffect } from "react";
import "./GameLists.css";
import { connect } from "react-redux";
import { loadGame } from "../actions/index.js";
import Game from "./Game";

const GameLists = ({ title, games, loadGame }) => {
  useEffect(() => {
    loadGame();
  }, []);
  return (
    <div className="GameLists">
      <h1 className="font-weight-bold">{title ? title : "All Games"}</h1>
      <button className="btn mr-3">
        Ordered by:{" "}
        <strong>
          Relevance &nbsp;&nbsp;<i className="fas fa-chevron-down"></i>
        </strong>
      </button>
      <button className="btn">
        Platforms &nbsp;&nbsp;<i className="fas fa-chevron-down"></i>
      </button>
      {games && (
        <div className="d-flex flex-row justify-content-around flex-wrap">
          {games && games.map((game) => <Game key={game.id} game={game} />)}
        </div>
      )}
    </div>
  );
};
const mapState = (state) => {
  const { games } = state.Games;
  return { games };
};

export default connect(mapState, { loadGame })(GameLists);
