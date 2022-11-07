import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </ul>
        <ul>
          <li>Homes </li>
          <li>Apartments </li>
          <li>Resorts </li>
          <li>Villas</li>
          <li>Hostels</li>
          <li>Guest houses</li>
        </ul>
        <ul>
          <li>Unique places to stay </li>
          <li>Reviews</li>
          <li>Unpacked: Travel articles </li>
          <li>Travel communities </li>
          <li>Seasonal and holiday deals </li>
        </ul>
        <ul>
          <li>Car rental </li>
          <li>Flight Finder</li>
          <li>Restaurant reservations </li>
          <li>Travel Agents </li>
        </ul>
      </div>
      <div className="ahmed">
        Coded With Love By Ahmed Taha
        <FontAwesomeIcon icon={faHeart} className="icon" />
      </div>
    </div>
  );
}

export default Footer;
