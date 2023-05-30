import React, { useState } from "react";

import "./TopRates.css";
import reviews from "../data/reviews.json";

const TopRates = () => {
  const numberOfStars = 5;
  const numberOfReviews = reviews.length;
  const [rateIndex, setRateIndex] = useState(0);

  const handleArrowClick = (side) => {
    switch (side) {
      case "left":
        rateIndex === 0
          ? setRateIndex(reviews.length - 1)
          : setRateIndex(rateIndex - 1);
        break;
      case "right":
        rateIndex === reviews.length - 1
          ? setRateIndex(0)
          : setRateIndex(rateIndex + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className="top-rates-container">
      <div className="left-arrow-rate" onClick={() => handleArrowClick("left")}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <g data-name="Layer 2">
              <g data-name="arrow-ios-back">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(90 12 12)"
                  opacity="0"
                ></rect>
                <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="top-rate-boxes-wrap">
        <div
          className="top-rate-boxes-container"
          style={{ transform: `translate(-${rateIndex * 110}%)` }}
        >
          {reviews.map((review) => {
            return (
              <div className="top-rate-box">
                <div className="stars">
                  {[...Array(numberOfStars)].map((e, i) => (
                    <>🟊</>
                  ))}
                </div>
                <p>"{review.text}"</p>
                <small>
                  &#x2015; <b>{review.name}</b> <i>{review.location}</i>
                </small>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="right-arrow-rate"
        onClick={() => handleArrowClick("right")}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <g data-name="Layer 2">
              <g data-name="arrow-ios-forward">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(-90 12 12)"
                  opacity="0"
                ></rect>
                <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="dot-selector">
        {[...Array(numberOfReviews)].map((e, i) => (
          <div
            key={i}
            style={i !== rateIndex ? { opacity: "0.5" } : null}
            onClick={() => setRateIndex(i)}
          >
            ·
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRates;
