import React, { useEffect } from "react";
import "./SideNav.css";
import { connect } from "react-redux";
import { loadGenre, loadGame } from "../actions/index.js";
import { Platform } from "../redux/Platform";
import { getLogo } from "../utils";

const SideNav = ({ genres, platform, loadGenre, loadGame }) => {
  var parse = require("html-react-parser");
  useEffect(() => {
    loadGenre();
    console.log("platform", platform);
  }, []);
  return (
    <div className="SideNav mt-3">
      <ul className="text-white text-left">
        <li>
          <a className="main-title">Home</a>
        </li>
        <li>
          <a className="main-title">Platforms</a>
        </li>
        {Object.keys(Platform).map((plat) => (
          <li key={plat} onClick={() => loadGame(`&parent_platforms=${plat}`)}>
            {platform === "" + plat ? (
              <a className="sub-list active">
                {parse(getLogo(Platform[plat].toLowerCase()))}&nbsp;&nbsp;
                {Platform[plat]}
              </a>
            ) : (
              <a className="sub-list">
                {parse(getLogo(Platform[plat].toLowerCase()))}&nbsp;&nbsp;
                {Platform[plat]}
              </a>
            )}
          </li>
        ))}
        {genres && (
          <li>
            <a className="main-title">Genres</a>
          </li>
        )}
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => loadGame(`&genre=${genre.name}`)}>
            <a className="sub-list">
              <img className="rounded" src={genre.image_background} />
              &nbsp;&nbsp;{genre.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  const { genres } = state.Genres;
  const { platform } = state.Games;
  return { genres, platform };
};

export default connect(mapState, { loadGenre, loadGame })(SideNav);
