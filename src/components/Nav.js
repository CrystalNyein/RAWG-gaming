import React, { useState, useEffect } from "react";
import "./Nav.css";
import SideNav from "./SideNav";
import { connect } from "react-redux";
import { loadGame } from "../actions/index.js";

const Nav = ({ loadGame }) => {
  const [searchName, setSearchName] = useState("");
  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };
  const handleGameLoad = (e) => {
    e.preventDefault();
    loadGame(`&search=${searchName}`);
    e.target.firstChild.blur();
    setSearchName("");
  };
  return (
    <nav className="navbar navbar-dark container-fluid">
      <a className="navbar-brand font-weight-bold" onClick={() => loadGame()}>
        <span>RA</span>WG
      </a>
      {
        <form className="form-inline my-2 my-lg-0" onSubmit={handleGameLoad}>
          <input
            className="form-control mr-sm-2 rounded-pill"
            type="text"
            placeholder="Search"
            value={searchName}
            onChange={handleSearchName}
          />
        </form>
      }
      <button
        id="navToggle"
        className="btn"
        type="button"
        data-toggle="collapse"
        data-target="#sideNav"
        aria-expanded="false"
        aria-controls="sideNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="sideNav" className="rounded">
        <SideNav />
      </div>
    </nav>
  );
};

export default connect(null, { loadGame })(Nav);
