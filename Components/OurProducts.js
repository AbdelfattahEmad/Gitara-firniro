import React from "react";
import "../css/ProductCard/Products.css";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  return (
    <section className="OurProducts">
      
      <div className="Title">
        <h2>Our Products</h2>
      </div>

      <div className="container">
        <div className="Cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="Show_more">
        <button>Show more</button>
      </div>
      
    </section>
  );
};

export default OurProducts;
