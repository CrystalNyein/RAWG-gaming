import React, { useEffect } from "react";
import "./SideNav.css";
import { connect } from "react-redux";
import { loadGenre, loadGame } from "../actions/index.js";

const SideNav = ({ genres, loadGenre, loadGame }) => {
  useEffect(() => {
    loadGenre();
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
        <li onClick={() => loadGame("&parent_platforms=1")}>
          <a className="sub-list">
            <i className="fab fa-windows rounded"></i>&nbsp;&nbsp;PC
          </a>
        </li>
        <li onClick={() => loadGame("&parent_platforms=2")}>
          <a className="sub-list">
            <i className="fab fa-playstation rounded"></i>
            &nbsp;&nbsp;Playstation
          </a>
        </li>
        <li onClick={() => loadGame("&parent_platforms=3")}>
          <a className="sub-list">
            <i className="fab fa-xbox rounded"></i>&nbsp;&nbsp;Xbox
          </a>
        </li>
        <li onClick={() => loadGame("&parent_platforms=7")}>
          <a className="sub-list">
            <i className="fab fa-neos rounded"></i>&nbsp;&nbsp;Nintendo
          </a>
        </li>
        <li onClick={() => loadGame("&parent_platforms=4")}>
          <a className="sub-list">
            <i className="fab fa-apple rounded"></i>&nbsp;&nbsp;iOS
          </a>
        </li>
        <li onClick={() => loadGame("&parent_platforms=8")}>
          <a className="sub-list">
            <i className="fab fa-android rounded"></i>&nbsp;&nbsp;Android
          </a>
        </li>
        {genres && (
          <li>
            <a className="main-title">Genres</a>
          </li>
        )}
        {genres.map((genre) => (
          <li key={genre.id}>
            <a className="sub-list">
              <img className="rounded" src={genre.image_background} />
              &nbsp;{genre.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  const { genres } = state.Genres;
  return { genres };
};

export default connect(mapState, { loadGenre, loadGame })(SideNav);
