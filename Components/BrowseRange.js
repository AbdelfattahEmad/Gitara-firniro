import React from "react";
import "../css/BrowseRang/Browse.css";
import Image from "next/image";

const BrowseRange = () => {
  return (
    <section className="BrowseRange">
      <div className="container">
        <div className="Title">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="Content_Range">
          <div className="Card">
            <Image
              src="/images/dining.png"
              alt="dining"
              width={380}
              height={480}
              style={{ objectFit: "cover" }}
              quality={100}
            />

            <p>Dining</p>
          </div>

          <div className="Card">
            <Image
              src="/images/living.png"
              alt="living"
              width={380}
              height={480}
              style={{ objectFit: "cover" }}
              quality={100}
            />

            <p>Living</p>
          </div>

          <div className="Card">
            <Image
              src="/images/bedroom.png"
              alt="dining"
              width={380}
              height={480}
              style={{ objectFit: "cover" }}
              quality={100}
            />

            <p>bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
