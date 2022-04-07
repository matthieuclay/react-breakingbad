import React from "react";

const Episode = ({ e }) => {
  return (
    <div className="episode">
      <span>{e.title}</span>
      <span>
        {e.season} - {e.episode}
      </span>
    </div>
  );
};

export default Episode;
