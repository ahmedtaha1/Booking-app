import React, { useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import "./list.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchItem from "../../components/search/SearchItem";

function List() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.dest);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const nav = () => {
    navigate("/hotels/:id");
  };

  return (
    <div>
      <Nav />
      <Header type="list" />
      <div className="list">
        <div className="container">
          <div className="search-box">
            <h3>search</h3>
            <div className="item">
              <label>destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="item">
              <label>Check-in Date</label>
              <input
                readOnly
                type="text"
                placeholder={`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM,dd,yyyy")}`}
              />
            </div>
            <div className="item">
              <label>options</label>
              <div className="options">
                <div className="option">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" />
                </div>
                <div className="option">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" />
                </div>
                <div className="option">
                  <span>Adult</span>
                  <input type="number" min={1} placeholder={options.adult} />
                </div>
                <div className="option">
                  <span>children</span>
                  <input type="number" min={0} placeholder={options.children} />
                </div>
                <div className="option">
                  <span>room</span>
                  <input type="number" min={1} placeholder={options.rooms} />
                </div>
              </div>
            </div>
            <button onClick={nav}>search</button>
          </div>
          <div className="results">
            <SearchItem src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
            <SearchItem src="https://cf.bstatic.com/xdata/images/hotel/square200/6123786.webp?k=def15cffcceb3d8fccbc68e17f67667e921f9077ecaca34ffd08015e161ccdbe&o=&s=1" />
            <SearchItem src="https://cf.bstatic.com/xdata/images/hotel/square200/363689492.webp?k=2c78f814114d01f01208bd31778032207c1031552619f4a4944312427b6ed134&o=&s=1" />
            <SearchItem src="https://cf.bstatic.com/xdata/images/hotel/square200/298865658.webp?k=8a2f8f7eabbfd3c1fcfafa995231b8f7ce9280fea9e29860417efc92a7f97956&o=&s=1" />
            <SearchItem src="https://cf.bstatic.com/xdata/images/hotel/square200/385258905.webp?k=fdebe81b9fdf77c816c22c228b86d3c346943d8ae21358ef09c2196822541caa&o=&s=1" />
            <SearchItem src="https://cf.bstatic.com/xdata/images/hotel/square200/288644202.webp?k=87c0d59d811036738647c511bba4af61a1bfc98946dd45661a2e4af99a21985f&o=&s=1" />
            <SearchItem src="https://cf.bstatic.com/xdata/images/hotel/square200/390329568.webp?k=3fef3170b0850c03d774c70aeffcec633dcd8a8e22d9977e887bb2c1a53e61a9&o=&s=1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
