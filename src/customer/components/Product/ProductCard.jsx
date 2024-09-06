import React from "react";
import "./ProductCard.css";
import { productData } from "./productData";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
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
          <p className="font-semibold">MRP : ₹ {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
