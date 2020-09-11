import React, { useEffect, useState } from "react";
import "./GameLists.css";
import { connect } from "react-redux";
import { loadGame, setCount } from "../actions/index.js";
import Game from "./Game";
import { Platform } from "../redux/Platform";
import Loader from "./Loader";
import Pagination from "./Pagination";
import OrderBox from "./OrderBox";
import { getLogo } from "../utils";
import Axios from "axios";

const GameLists = ({
  platform,
  genre,
  page,
  search,
  count,
  loadGame,
  setCount,
}) => {
  var parse = require("html-react-parser");
  const [gameClick, setGameClick] = useState(false);
  const [gameInfo, setGameInfo] = useState({});
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchGames = async (param) => {
    setLoading(true);
    await Axios.get(
      `https://api.rawg.io/api/games?page=${page}&page_size=15${param}`
    )
      .then((res) => {
        setCount(res.data.count);
        setGameList(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setGameList([]);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchGames("");
  }, []);
  useEffect(() => {
    if (platform) fetchGames(`&parent_platforms=${platform}`);
  }, [platform]);
  useEffect(() => {
    if (genre) fetchGames(`&genres=${genre}`);
  }, [genre]);
  useEffect(() => {
    if (search) fetchGames(`&search=${search}`);
  }, [search]);
  useEffect(() => {
    if (platform) fetchGames(`&parent_platforms=${platform}`);
    if (genre) fetchGames(`&genres=${genre}`);
    if (search) fetchGames(`&search=${search}`);
  }, [page]);
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
      <h1 className="font-weight-bold text-capitalize">
        {platform
          ? `Games for ${Platform[platform]}`
          : genre
          ? `${genre} Games`
          : search
          ? `Games for ${search}`
          : "All Games"}
        <span className="page-no">({page})</span>
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
      {!!gameList.length && (
        <div className="d-flex flex-row justify-content-around flex-wrap">
          {!!gameList.length &&
            gameList.map((game) => (
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
        <Pagination
          loadGame={loadGame}
          page={page}
          setGameList={setGameList}
          setLoading={setLoading}
          count={count}
        />
      </div>
    </div>
  );
};
const mapState = (state) => {
  return state.Games;
};

export default connect(mapState, { loadGame, setCount })(GameLists);
