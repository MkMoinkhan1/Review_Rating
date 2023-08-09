import React from "react";
import circleStar from "../assets/circleStar.jpeg";
import logoImg from "../assets/logo.jpg";
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <>
      <header>
        <div className="review-logo">
          <img className="review-starImg" src={circleStar} alt="starImg" />
          <img className="review-logoImg" src={logoImg} alt="Logo" />
        </div>
        <ul>
          <div className="review-search-box">
            <input
              className="review-search-input"
              type="text"
              placeholder="Search something.."
            />
            <button className="review-search-btn">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#7910de" }}
              />
            </button>
          </div>
          <div className="review-avtar" />
        </ul>
      </header>
    </>
  );
};

export default Navbar;
