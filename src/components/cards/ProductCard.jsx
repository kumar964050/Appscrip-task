import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product?.image} alt={product?.category} />
      <div>
        <p className="product-name">{product?.title?.slice(0, 11)}</p>
        <IoIosHeartEmpty className="icon" size={20} />
      </div>
    </div>
  );
};

export default ProductCard;
