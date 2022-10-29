import React from "react";

export const Tile = ({tile}) => {
  const elements = Object.values(tile);
  const firstElement = elements[0];
  const restElements = elements.slice(1);
  
  return (
    <div className="tile-container">
      <p className="tile-title" >{firstElement}</p>
      {restElements.map((element)=>{
        return <p className="tile" >{element}</p>
      })}
    </div>
  );
};
