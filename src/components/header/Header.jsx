import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  faBed,
  faCalendarDays,
  faHome,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router";
function Header(props) {
  const [dest, setDest] = useState("");
  const [openCalender, setOpenCalender] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });
  const handleOPtions = (name, oper) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: oper === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { date, options, dest } });
  };
  return (
    <div className={props.type === "list" ? "header hl" : "header"}>
      <div className="container">
        <ul>
          <li>
            <NavLink to={"/"} end>
              <FontAwesomeIcon icon={faHome} />
              <span> Home</span>
            </NavLink>
          </li>

          <li onClick={handleSearch}>
            <NavLink to={"/hotels"} end>
              <FontAwesomeIcon icon={faPlane} />
              <span> Flights</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/hotels/:id"} end>
              <FontAwesomeIcon icon={faBed} /> <span>Attractions</span>
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faTaxi} />
            <span> Airport taxis</span>
          </li>
        </ul>
        {props.type !== "list" && (
          <>
            <div className="info">
              <h1 className="title">A lifetime of discounts? It's Genius.</h1>
              <p className="desc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <button className="button-hdr">Sign in / Register</button>
            </div>

            <div className="search">
              <div className="item">
                <FontAwesomeIcon icon={faBed} className="icon" />
                <input
                  type="text"
                  placeholder="Your Destination ..!"
                  onChange={(e) => {
                    setDest(e.target.value);
                  }}
                />
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                <span
                  onClick={() => {
                    setOpenCalender(!openCalender);
                  }}
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openCalender && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="item">
                <FontAwesomeIcon icon={faPerson} className="icon" />
                <span
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                >
                  <span> {options.adult} adult ·</span>
                  <span>
                    {options.children}
                    children ·
                  </span>
                  <span> {options.rooms} room</span>
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="option">
                      <p>Adults</p>
                      <div className="edit">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => {
                            handleOPtions("adult", "d");
                          }}
                        >
                          -
                        </button>
                        {options.adult}
                        <button
                          onClick={() => {
                            handleOPtions("adult", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option">
                      <p> children </p>
                      <div className="edit">
                        <button
                          disabled={options.children <= 1}
                          onClick={() => {
                            handleOPtions("children", "d");
                          }}
                        >
                          -
                        </button>
                        {options.children}
                        <button
                          onClick={() => {
                            handleOPtions("children", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option">
                      <p>rooms</p>
                      <div className="edit">
                        <button
                          disabled={options.rooms <= 1}
                          onClick={() => {
                            handleOPtions("rooms", "d");
                          }}
                        >
                          -
                        </button>
                        {options.rooms}
                        <button
                          onClick={() => {
                            handleOPtions("rooms", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="item" onClick={handleSearch}>
                Search
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
