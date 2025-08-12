import React from "react";
import "../css/SwiperRooms/Rooms.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MySwiper from "./swiper";
// import MySwiper from "./swiper";

const SwiperRoom = () => {
  return (
    <section className="SwiperRoom">
      <div className="container">
        <div className="row">
          <div
            className="col-12  col-md-5"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="Rooms_content">
              <h2>
                50+ Beautiful rooms <br /> inspiration
              </h2>
              <p>
                Our designer already made a lot of beautiful <br /> prototipe of
                rooms that inspire you{" "}
              </p>

              <button className="Explore_More">Explore More</button>
            </div>
          </div>
          <div className=" col-12 col-md-7">
            <div className="swiper_room">
              {/* <MySwiper /> */}
              <MySwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SwiperRoom;
