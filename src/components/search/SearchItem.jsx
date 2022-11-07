import React from "react";
import "./searchitem.scss";

function SearchItem(props) {
  return (
    <div className="search-item">
      <img src={props.src} alt="" className="siImg" />
      <div className="desc">
        <h1>Tower Street Apartments</h1>
        <span className="distance">500m from center</span>
        <span className="taxi">Free airport taxi</span>
        <span className="subtitle">Studio Apartment with Air conditioning</span>
        <span className="feature">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="cancel">Free cancellation </span>
        <span className="cancel-sub">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="details">
        <div className="rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="info">
          <span className="price">$112</span>
          <span className="tax">Includes taxes and fees</span>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
