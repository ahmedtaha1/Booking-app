import React from "react";
import { useNavigate } from "react-router";
import "./nav.scss";

function Nav() {
  const navigate = useNavigate();
  const nav = () => {
    navigate("/");
  };
  return (
    <div className="nav">
      <div className="container">
        <h2 onClick={nav}>Booking.com</h2>
        <div className="buttons">
          <button>Register</button>
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
