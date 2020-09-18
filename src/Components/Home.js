import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={2342424}
            title="Amazon Brand - Solimo Wi-Fi Smart Light, 12W, B22 Holder, Alexa
            Enabled (Yellow/Light Yellow/White)"
            price={30.99}
            img="https://m.media-amazon.com/images/I/71bltWjd65L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id={234242234}
            title="K3 10W WATERPROOF PURE WHITE LED FLOOD LIGHT BULB SMD AC FOR OUTDOOR (10 0WATT )"
            price={30}
            img="https://images-na.ssl-images-amazon.com/images/I/41094oJqVpL._SX466_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={23424242}
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate"
            price={100}
            img="https://m.media-amazon.com/images/I/41HTgpvjbfL.__AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id={234242466}
            title="
            Optimum Nutrition (ON) 100% Whey Protein Powder - 1.85 lbs, 837 g (Chocolate Milkshake)"
            price={100}
            img="https://images-na.ssl-images-amazon.com/images/I/61oOKRcF9XL._SL1408_.jpg"
            rating={3}
          />
          <Product
            id={2342424768}
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate"
            price={80}
            img="https://images-na.ssl-images-amazon.com/images/I/31zfTm25A9L.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id={234242499}
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={100}
            img="https://images-na.ssl-images-amazon.com/images/I/41NnaLXlzwL._SY300_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
