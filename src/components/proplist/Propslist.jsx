import React from "react";
import "./proplist.scss";

function Propslist() {
  return (
    <div className="plist">
      <div className="container">
        <h1>Browse by property type</h1>
        <div className="types">
          <div className="item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
              alt=""
            />
            <div className="info">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="item">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o="
              alt=""
            />
            <div className="info">
              <h1>Apartments</h1>
              <h2>2331 hotels</h2>
            </div>
          </div>
          <div className="item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
              alt=""
            />
            <div className="info">
              <h1>Resorts</h1>
              <h2>2331 hotels</h2>
            </div>
          </div>
          <div className="item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
              alt=""
            />
            <div className="info">
              <h1>Villas</h1>
              <h2>2331 hotels</h2>
            </div>
          </div>
          <div className="item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt=""
            />
            <div className="info">
              <h1>Cabins</h1>
              <h2>2331 hotels</h2>
            </div>
          </div>
        </div>
        <h1>Stay at our top unique properties</h1>
        <div className="props">
          <div className="prop">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
              alt=""
            />
            <span className="name"> Stare Miasto</span>
            <span className="city">Madrid</span>
            <span className="price">Starting from $120</span>
            <div className="rating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="prop">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
              alt=""
            />
            <span className="name">Comfort Suites Airport</span>
            <span className="city">Austin</span>
            <span className="price">Starting from $140</span>
            <div className="rating">
              <button>9.3</button>
              <span>Exceptional</span>
            </div>
          </div>
          <div className="prop">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
              alt=""
            />
            <span className="name">Four Seasons Hotel</span>
            <span className="city">Lisbon</span>
            <span className="price">Starting from $99</span>
            <div className="rating">
              <button>8.8</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="prop">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt=""
            />
            <span className="name">Hilton Garden Inn</span>
            <span className="city">Berlin</span>
            <span className="price">Starting from $105</span>
            <div className="rating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Propslist;
