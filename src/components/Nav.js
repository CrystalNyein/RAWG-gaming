import React from "react";
import "./Nav.css";
import SideNav from "./SideNav";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark container">
      <a className="navbar-brand font-weight-bold" href="#">
        <span>RAWG</span>
      </a>

      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2 rounded-pill"
          type="text"
          placeholder="Search"
        />
      </form>
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

export default Nav;
