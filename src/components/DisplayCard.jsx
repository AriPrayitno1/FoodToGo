import React from "react";

const DisplayCard = (props) => {
  return (
    <div>
      <img src={props.image}/>
      <h1 className="text-black text-lg font-bold mt-2">{props.name}</h1>
    </div>
  );
};

export default DisplayCard;
