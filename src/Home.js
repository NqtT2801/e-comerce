import React from "react";
import "./Home.css";
import Product from "./Product";
import background3 from "./images/background3.jpg"
import product1 from "./images/products/product1.jpg"
import product2 from "./images/products/product2.jpg"
import product3 from "./images/products/product3.jpg"
import product4 from "./images/products/product4.jpg"
import product5 from "./images/products/product5.jpg"
import product6 from "./images/products/product6.jpg"
import product7 from "./images/products/product7.jpg"
import product8 from "./images/products/product8.jpg"
import product9 from "./images/products/product9.jpg"
import product10 from "./images/products/product10.jpg"
import product11 from "./images/products/product11.jpg"
import product12 from "./images/products/product12.jpg"
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={background3} alt="" />

        <div className="home__row">
          <Product
            id="1"
            title="2021 Apple 10.2-inch iPad (Wi-Fi, 256GB) - Space Gray"
            price={11.96}
            rating={5}
            image={product1}
          />
          <Product
            id="2"
            title="Oculus Rift - Virtual Reality Headset"
            price={239.0}
            rating={4}
            image={product2}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Arlo Essential Spotlight Camera - 1 Pack - Wireless Security, 1080p Video"
            price={199.99}
            rating={3}
            image={product3}
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={product4}
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={product5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={4}
            image={product6}
          />
          <Product
            id="7"
            title="Amazon Astro, Household Robot for Home Monitoring"
            price={239.0}
            rating={4}
            image={product7}
          />
        </div>
        <div className="home__row">
          <Product
            id="8"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={199.99}
            rating={3}
            image={product8}
          />
          <Product
            id="9"
            title="LEVOIT Humidifiers for Bedroom Large Room Home, Smart Wifi Alexa Control"
            price={98.99}
            rating={5}
            image={product9}
          />
          <Product
            id="10"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={product10}
          />
        </div>
        <div className="home__row">
          <Product
            id="11"
            title="Furbo Dog Camera: Treat Tossing, Full HD Wifi Pet Camera and 2-Way Audio, Designed for Dogs"
            price={1094.98}
            rating={4}
            image={product11}
          />
          <Product
            id="12"
            title="SAMSUNG 65-Inch Class QLED Q80A Series - 4K UHD Direct Full Array Quantum HDR 12x Smart TV"
            price={239.0}
            rating={4}
            image={product12}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
