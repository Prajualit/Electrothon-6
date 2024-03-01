// Leadorg.js

import React from "react";
import "../Organising_Team/Lead.css";
import { back_demo } from "../../assets/images";

const Leadorg = ({ data, isFlipped, onCardClick }) => {
  const handleClick = () => {
    onCardClick();
  };

  return (
    <div className="card-container mb-16">
      <div
        className={`crd ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="front p-4 flex flex-col justify-center items-center">
          <picture className="w-full h-full">
            <img
              loading="lazy" //  lazy loading
              className=" object-cover rounded-full sm:h-40 sm:w-40     "
            
               src={data.img}
              alt="organizerImg"
            />
          </picture>
          <div className="text-white flex w-full justify-center items-center">
            <h2>{data.name}</h2>
          </div>
        </div>
        <div className="z-[-5] back p-4 flex flex-col justify-between">
          <picture className="h-3/4">
            <img
              loading="lazy"
              className="h-3/4 w-full"
              src={back_demo}
              alt="organizerImg"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Leadorg;
