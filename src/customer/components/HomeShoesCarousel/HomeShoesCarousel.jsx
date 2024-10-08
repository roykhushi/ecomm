import React from "react";
import HomeShoesCard from "../HomeShoesCard/HomeShoesCard";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5.5 },
};

const items = [1, 1, 1, 1, 1].map((item) => <HomeShoesCard />);

const HomeShoesCarousel = ({sectionName}) => {
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
          autoPlayInterval={3000}
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </div>
  );
};

export default HomeShoesCarousel;
