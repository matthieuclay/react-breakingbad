import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://www.breakingbadapi.com/api/characters/").then((res) => {
      setCharacters(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="characters">
      <Header />
      <div className="characters-list">
        {characters
          .filter((c) => c.category.includes("Breaking Bad"))
          .map((c, i) => (
            <Character c={c} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Characters;
