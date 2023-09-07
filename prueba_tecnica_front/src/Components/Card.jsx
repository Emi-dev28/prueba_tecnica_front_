import React, { useEffect, useState } from "react";

const Card = () => {
  const [selected, setSelected] = useState(false);
  
  return (
    <div>
      <img src={pokemon.url} alt={pokemon.name} />
      <span>{pokemon.name}</span>
      <span></span>
    </div>
  );
};

export default Card;
