import React from "react";
import DarkMode from "../components/DarkMode";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <DarkMode />
    </header>
  );
};

export default Header;
