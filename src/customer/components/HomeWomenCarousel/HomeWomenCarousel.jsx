import React from "react";
import HomeWomenClothing from "../HomeWomenClothing/HomeWomenClothing";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5.5 },
};

const items = [1, 1, 1, 1, 1].map((item) => <HomeWomenClothing />);

const HomeWomenCarousel = ({sectionName}) => {
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative px-2 font-bold">
        <h3 className="font-extrabold py-5">{sectionName}</h3>
      </div>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          infinite
          autoPlayInterval={5000}
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </div>
  );
};

export default HomeWomenCarousel;
