import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.cardImg}/>
      <h1 className="text-black text-lg font-bold mt-2">{props.cardTitle}</h1>
    </div>
  );
};

export default Card;
