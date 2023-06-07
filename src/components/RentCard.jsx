import React, { useState } from "react";

import "./RentCard.css";

const RentCard = ({ rent }) => {
  const [cardImgIndex, setCardImgIndex] = useState(0);

  const handleArrowClickCard = (side) => {
    switch (side) {
      case "left":
        cardImgIndex === 0
          ? setCardImgIndex(rent.images.length - 1)
          : setCardImgIndex(cardImgIndex - 1);
        break;
      case "right":
        cardImgIndex === rent.images.length - 1
          ? setCardImgIndex(0)
          : setCardImgIndex(cardImgIndex + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className="rent-card-container">
      <div className="price-range">
        <strong>
          {rent.price[0]} € → {rent.price[1]}
        </strong>{" "}
        € / nuit
      </div>
      <div className="card-top">
        <div
          className="left-arrow-rent-card"
          onClick={() => handleArrowClickCard("left")}
        >
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
        {rent.images.map((image, index) => (
          <div
            className="rent-card-image-container"
            style={{
              transform: `translate(-${cardImgIndex * 100}%)`,
              backgroundImage: `url(${image})`,
            }}
            key={image}
          />
        ))}
        <div
          className="right-arrow-rent-card"
          onClick={() => handleArrowClickCard("right")}
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
      </div>
      <div className="card-middle">
        <small>{rent.city}</small>
        <h3>{rent.name}</h3>
        <p>{rent.short}</p>
      </div>
      <div className="card-bottom">
        <div>
          <i>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="User / Users_Group">
                  <path
                    id="Vector"
                    d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
                    stroke="#6c757d"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          </i>
          <span>{rent.people}</span>
        </div>
        <div>
          <i>
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#6c757d"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <style type="text/css"></style>
                <g>
                  <path
                    class="st0"
                    d="M439.616,151.846V81.819c-0.015-25.396-20.576-45.972-45.979-45.986H122.97h-4.603 c-25.404,0.014-45.968,20.59-45.978,45.978v70.034L0,333.171V443.72c0.018,17.918,14.524,32.424,32.427,32.446h0.719h445.726h0.7 c17.904-0.022,32.409-14.528,32.428-32.431V333.171L439.616,151.846z M109.943,81.827c0.008-4.648,3.791-8.435,8.428-8.435h275.258 c4.64,0,8.424,3.787,8.431,8.428v69.997h-22.682v-23.742c-0.004-20.171-16.422-36.593-36.597-36.6h-44.227 c-20.172,0.008-36.586,16.429-36.593,36.6v23.742h-11.923v-23.742c-0.008-20.171-16.422-36.593-36.593-36.6h-44.227 c-20.176,0.008-36.593,16.429-36.596,36.6v23.742h-22.679V81.827z M357.92,128.074v23.742H283.42v-23.734 c0.015-8.338,6.807-15.134,15.138-15.142h44.22C351.112,112.948,357.904,119.744,357.92,128.074z M228.58,128.074v23.742H154.08 v-23.734c0.015-8.338,6.808-15.134,15.142-15.142h44.219C221.772,112.948,228.564,119.744,228.58,128.074z M104.266,173.283 h303.472l5.876,14.715H98.39L104.266,173.283z M89.824,209.464h332.355l46.866,117.398H42.954L89.824,209.464z M474.446,438.608 H37.555v-90.281h436.891V438.608z"
                  />
                </g>
              </g>
            </svg>
          </i>
          <span>{rent.rooms}</span>
        </div>
        <div>
          <i>
            <svg
              fill="#6c757d"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#6c757d"
              stroke-width="0.00032"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <g data-name="Layer 2" id="Layer_2">
                  <path d="M28.5,14H28V4.1A3.1,3.1,0,0,0,24.9,1H22.4A2.39,2.39,0,0,0,20,3.4v.74A4,4,0,0,0,17,8V9a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V8a4,4,0,0,0-3-3.86V3.4a.4.4,0,0,1,.4-.4h2.5A1.11,1.11,0,0,1,26,4.1V14H3.5A2.49,2.49,0,0,0,2,18.49v3a6.58,6.58,0,0,0,4.38,6.18L5.17,29.45a1,1,0,0,0,.28,1.38A.94.94,0,0,0,6,31a1,1,0,0,0,.83-.45L8.54,28H23.46l1.71,2.55A1,1,0,0,0,26,31a.94.94,0,0,0,.55-.17,1,1,0,0,0,.28-1.38l-1.21-1.83A6.58,6.58,0,0,0,30,21.44v-3A2.49,2.49,0,0,0,28.5,14ZM23,8H19a2,2,0,0,1,4,0ZM3.5,16h25a.5.5,0,0,1,0,1H3.5a.5.5,0,0,1,0-1ZM28,21.44A4.57,4.57,0,0,1,23.44,26H8.56A4.57,4.57,0,0,1,4,21.44V19H28Z"></path>{" "}
                </g>
              </g>
            </svg>
          </i>
          <span>{rent.bathrooms}</span>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
