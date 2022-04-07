import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={(nav) => (nav.isActive ? "nav-active nav" : "nav")}
      >
        home
      </NavLink>

      <NavLink
        to="/characters"
        className={(nav) => (nav.isActive ? "nav-active nav" : "nav")}
      >
        characters
      </NavLink>

      <NavLink
        to="/episodes"
        className={(nav) => (nav.isActive ? "nav-active nav" : "nav")}
      >
        episodes
      </NavLink>

      <NavLink
        to="/quotes"
        className={(nav) => (nav.isActive ? "nav-active nav" : "nav")}
      >
        quotes
      </NavLink>

      <NavLink
        to="/deaths"
        className={(nav) => (nav.isActive ? "nav-active nav" : "nav")}
      >
        deaths
      </NavLink>
    </div>
  );
};

export default Navigation;
