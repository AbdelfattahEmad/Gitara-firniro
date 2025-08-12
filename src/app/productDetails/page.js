"use client";

import React, { useState } from "react";
import "../../../css/ProductDetails/ProductDetails.css";
import { FaAngleRight } from "react-icons/fa";
import ProductSwiper from "../../../Components/ProductSwiper";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const ProductDetails = () => {
  // sizes cheack Button
  const sizes = ["S", "M", "L", "XL"];
  const [selected, setSelected] = useState(null);

  const [selectedColor, setselectedColor] = useState(null);

  //colors cheack buttons
  const colors = [
    { name: "Black", code: "#000000" },
    { name: "White", code: "#B88E2F" },
    { name: "Red", code: "#ff0000" }
  ];

  return (
    <section className="ProductDetails">
      <div className="Title_nav">
        <h3>Home</h3>
        <FaAngleRight />
        <h3>Product</h3>
        <FaAngleRight />
        <p>|</p>
        <h3>Asgaard sofa</h3>
      </div>
      <div className="Products">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <ProductSwiper />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="Product_content">
                <div className="title">
                  <h2>Asgaard Sofa</h2>
                </div>
                <div className="price">
                  <h3>Rs. 250,000.00</h3>
                </div>

                <div className="rate">
                  <div className="stars">starts</div>

                  <span>|</span>

                  <p className="Review">5 Customer Review</p>
                </div>

                <div className="Description">
                  Setting the bar as one of the loudest speakers in its class,
                  the <br /> Kilburn is a compact, stout-hearted hero with a
                  well-balanced <br /> audio which boasts a clear midrange and
                  extended highs for <br /> a sound.
                </div>

                {/* sizes  */}
                <div className="size-buttons">
                  <h4 className="size-title">Size </h4>
                  {sizes.map(size =>
                    <button
                      key={size}
                      className={`size-btn ${selected === size
                        ? "active"
                        : ""}`}
                      onClick={() => setSelected(size)}
                    >
                      {size}
                    </button>
                  )}
                </div>

                {/*  colors */}

                <div className="color-buttons">
                  <p className="color-title">Color</p>

                  {colors.map(color =>
                    <button
                      key={color.name}
                      className={`color-btn ${selectedColor === color.name
                        ? "active"
                        : ""}`}
                      style={{ backgroundColor: color.code }}
                      onClick={() => setselectedColor(color.name)}
                    >
                      {selectedColor === color.name &&
                        <span className="check-mark">✓</span>}
                    </button>
                  )}
                </div>

                <div className="interaction">
                  {/*  quantity */}
                  <div className="quantity-container">
                    <button
                      className="qty-btn"
                      onClick={() => {
                        const input = document.getElementById("qty");
                        input.value = Math.max(1, parseInt(input.value) - 1);
                      }}
                    >
                      -
                    </button>

                    <input
                      id="qty"
                      type="number"
                      defaultValue="1"
                      className="qty-input"
                    />

                    <button
                      className="qty-btn"
                      onClick={() => {
                        const input = document.getElementById("qty");
                        input.value = parseInt(input.value) + 1;
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button className="add-to-cart">Add to Cart</button>

                  <button className="add-to-cart">+ Compare</button>
                </div>
                <div className="info">
                  <div className="info_item">
                    <p>SKU</p>
                    <span>:</span>
                    <p>SS001</p>
                  </div>
                  <div className="info_item">
                    <p>Category</p>
                    <span>:</span>
                    <p>safas</p>
                  </div>
                  <div className="info_item">
                    <p>Tags</p>
                    <span>:</span>
                    <p>Sofa, Chair, Home, Shop</p>
                  </div>
                  <div className="info_item">
                    <p>share</p>
                    <span>:</span>
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitterSquare />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
