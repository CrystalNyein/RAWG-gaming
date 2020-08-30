import React, { useEffect, useState } from "react";
import "./GameLists.css";
import { connect } from "react-redux";
import { loadGame } from "../actions/index.js";
import Game from "./Game";
import { Platform } from "../redux/Platform";
import Loader from "./Loader";
import Pagination from "./Pagination";
import OrderBox from "./OrderBox";
import { getLogo } from "../utils";

const GameLists = ({
  platform,
  genre,
  page,
  search,
  games,
  loading,
  loadGame,
}) => {
  var parse = require("html-react-parser");
  // const [orderClick, setOrderClick] = useState(false);
  // const [orderPos, setOrderPos] = useState([]);
  const [gameClick, setGameClick] = useState(false);
  const [gameInfo, setGameInfo] = useState({});
  useEffect(() => {
    loadGame();
  }, []);
  // const openOrderBox = (e) => {
  //   if (e.target.nodeName === "STRONG")
  //     setOrderPos(e.target.parent.getBoundingClientRect());
  //   else setOrderPos(e.target.getBoundingClientRect());
  //   setOrderClick(true);
  // };
  return loading ? (
    <Loader />
  ) : gameClick ? (
    <div className="GameLists">
      <button className="btn" onClick={() => setGameClick(false)}>
        Back
      </button>
      <h1 className="font-weight-bold">{gameInfo.name}</h1>
      <div className="d-flex flex-row justify-content-between mt-3">
        <div className="gameInfo">
          {gameInfo.parent_platforms.map((platform) =>
            parse(getLogo(platform.platform.slug))
          )}
        </div>
        <img
          className="rounded"
          src={gameInfo.background_image}
          alt={gameInfo.name}
          style={{ width: "500px" }}
        />
      </div>
    </div>
  ) : (
    <div className="GameLists">
      <h1 className="font-weight-bold">
        {platform
          ? `Games for ${Platform[platform]}`
          : genre
          ? `${genre} Games`
          : search
          ? `Games for ${search}`
          : "All Games"}
      </h1>
      {/*<button className="btn mr-3" onClick={openOrderBox}>
        Ordered by :{" "}
        <strong>
          Relevance &nbsp;&nbsp;<i className="fas fa-chevron-down"></i>
        </strong>
      </button>
      {orderClick && (
        <OrderBox setOrderClick={setOrderClick} orderPos={orderPos} />
      )}
      <button className="btn">
        {platform ? Platform[parseInt(platform)] : "Platforms"} &nbsp;&nbsp;
        <i className="fas fa-chevron-down"></i>
      </button>*/}
      {games && (
        <div className="d-flex flex-row justify-content-around flex-wrap">
          {games &&
            games.map((game) => (
              <Game
                key={game.id}
                game={game}
                setGameClick={setGameClick}
                setGameInfo={setGameInfo}
              />
            ))}
        </div>
      )}
      <div className="d-flex flex-row justify-content-center py-3">
        <Pagination loadGame={loadGame} page={page} />
      </div>
    </div>
  );
};
const mapState = (state) => {
  return state.Games;
};

export default connect(mapState, { loadGame })(GameLists);
