import React from "react";
import "./mail.scss";

function Mail() {
  return (
    <div className="mail">
      <div className="container">
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals</p>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Mail;
