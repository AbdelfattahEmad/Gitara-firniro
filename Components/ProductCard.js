import React from "react";
import "../css/ProductCard/Products.css";
import Link from "next/link";
import Image from "next/image";
import { CiShare2, CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

const ProductCard = () => {
  return (
    <div className="product_card">
      <Link href="/productDetails">
        <Image
          src="/images/product1.png"
          alt="dining"
          width={285}
          height={300}
          style={{ objectFit: "fill" }}
          quality={100}
        />
      </Link>

      <div className="product_content">
        <h3 className="product_name">Syltherine</h3>
        <p className="Description">Stylish cafe chair</p>
        <div className="price">
          <p className="price_before">RP 22.000</p>
          <p className="price_after">RP 25.00</p>
        </div>
      </div>
      <span className="discount">20%</span>

      <div className="overlay">
        <div className="overlay-content">
          <button className="Add_To_Cart">Add To Cart</button>

          <div className="interaction">
            <div className="icons">
              <CiShare2 />

              <p>share</p>
            </div>

            <div className="icons">
              <MdOutlineCompareArrows />

              <p>compare</p>
            </div>

            <div className="icons">
              <CiHeart />
              <p>like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
