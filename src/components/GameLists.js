import React, { useEffect } from "react";
import "./GameLists.css";
import { connect } from "react-redux";
import { loadGame } from "../actions/index.js";
import Game from "./Game";
import { Platform } from "../redux/Platform";
import Loader from "./Loader";
import Pagination from "./Pagination";

const GameLists = ({ platform, genre, page, games, loading, loadGame }) => {
  useEffect(() => {
    loadGame();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="GameLists">
      <h1 className="font-weight-bold">
        {platform
          ? `Games for ${Platform[platform]}`
          : genre
          ? `${genre} Games`
          : "All Games"}
      </h1>
      <button className="btn mr-3">
        Ordered by:{" "}
        <strong>
          Relevance &nbsp;&nbsp;<i className="fas fa-chevron-down"></i>
        </strong>
      </button>
      <button className="btn">
        {platform ? Platform[parseInt(platform)] : "Platforms"} &nbsp;&nbsp;
        <i className="fas fa-chevron-down"></i>
      </button>
      {games && (
        <div className="d-flex flex-row justify-content-around flex-wrap">
          {games && games.map((game) => <Game key={game.id} game={game} />)}
        </div>
      )}
      <Pagination loadGame={loadGame} page={page} />
    </div>
  );
};
const mapState = (state) => {
  return state.Games;
};

export default connect(mapState, { loadGame })(GameLists);
