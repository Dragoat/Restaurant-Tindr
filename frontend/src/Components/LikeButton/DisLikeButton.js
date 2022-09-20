import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "./dislike.svg";


import "./styles.css";

const particleList = Array.from(Array(10));

const DisLikeButton = () => {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setLiked(!liked);
        setClicked(true);
      }}
      onAnimationEnd={() => setClicked(false)}
      className={cn("like-button-wrapper", {
        liked,
        clicked,
        
      })}
    >
      {liked && (
        <div className="particles">
          {particleList.map((_, index) => (
            <div
              className="particle-rotate"
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className="particle-tick" />
            </div>
          ))}
        </div>
      )}
      <div className="like-button">
        <Hand />
        <span>Dislike</span>
        <span className={cn("suffix", { liked })}>d</span>
      </div>
    </button>
    
  );
};

export default DisLikeButton;
