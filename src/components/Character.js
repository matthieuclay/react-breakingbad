import React from "react";

const Character = ({ c }) => {
  return (
    <div className="character">
      <img src={c.img} alt={c.name} />
      <span>
        {c.name} ({c.nickname})
      </span>
      <span>{c.status}</span>
    </div>
  );
};

export default Character;
