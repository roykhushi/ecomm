import React from "react";
import "./ProductCard.css";
import { productData } from "./productData";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.path}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-80 text-gray-950">
            {product.brand}
          </p>
          <p className="font-semibold opacity-40">
            {product.title}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">MRP : Rs {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
