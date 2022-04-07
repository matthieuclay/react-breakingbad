import axios from "axios";
import React, { useEffect, useState } from "react";
import Episode from "../components/Episode";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://www.breakingbadapi.com/api/episodes/").then((res) => {
      setEpisodes(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="episodes">
      <Header />
      <h1>Episodes</h1>
      <div className="episodes-list">
        {episodes
          .filter((e) => e.series.includes("Breaking Bad"))
          .map((e, i) => (
            <Episode e={e} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Episodes;
