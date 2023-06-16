import React, { useState } from "react";

import "./TopRates.css";
import reviews from "../data/reviews.json";

function TopRates() {
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
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" />
          <g id="SVGRepo_iconCarrier">
            <g data-name="Layer 2">
              <g data-name="arrow-ios-back">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(90 12 12)"
                  opacity="0"
                />
                <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
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
          {reviews.map((review, i) => (
            <div className="top-rate-box" key={i}>
              <div>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <svg
                      key={index}
                      className="stars"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
              </div>
              <p>"{review.text}"</p>
              <small>
                &#x2015; <b>{review.name}</b> <i>{review.location}</i>
              </small>
            </div>
          ))}
        </div>
      </div>
      <div
        className="right-arrow-rate"
        onClick={() => handleArrowClick("right")}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" />
          <g id="SVGRepo_tracerCarrier" />
          <g id="SVGRepo_iconCarrier">
            <g data-name="Layer 2">
              <g data-name="arrow-ios-forward">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(-90 12 12)"
                  opacity="0"
                />
                <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
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
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRates;
