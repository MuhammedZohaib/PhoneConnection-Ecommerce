import CSS from "./ProductCard.module.css";

import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProductCardProps = {
  image: string;
  rating: number;
  name: string;
  price: number;
  id: number;
};

export default function ProductCard(props: ProductCardProps) {
  const [filled, setFilled] = useState<boolean>(false);
  const len = Math.ceil(props.rating);
  const len2 = 5 - len;

  const arr = new Array(len).fill(0);
  const arr2 = new Array(len2).fill(0);

  return (
    <div className={CSS.mainContainer}>
      <div className={CSS.image}>
        <Link to={`/products/${props.id}`}>
          <img src={props.image} alt="product image" />
        </Link>
      </div>
      <div className={CSS.rating}>
        {arr.map(() => (
          <AiFillStar size={20} style={{ color: "#ee5a2c" }}></AiFillStar>
        ))}
        {arr2.map(() => (
          <AiOutlineStar size={20} style={{ color: "#ee5a2c" }}></AiOutlineStar>
        ))}
      </div>
      <div className={CSS.productDetails}>
        <div className={CSS.typo}>
          <h3>{props.name}</h3>
          <h4>${props.price}</h4>
        </div>
        <div
          onClick={() => {
            setFilled(!filled);
          }}
        >
          {!filled ? (
            <AiOutlineHeart size={28}></AiOutlineHeart>
          ) : (
            <AiFillHeart size={28} style={{ color: "#ee5a2c" }}></AiFillHeart>
          )}
        </div>
      </div>
    </div>
  );
}
