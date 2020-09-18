import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";

function Product({ id, title, img, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>
            <small>$</small>
            {price}
          </strong>
        </p>
        <div className="product__rating">
          <ul className="product__ratingStars">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <li key={i}>
                  <StarRateIcon />
                </li>
              ))}
          </ul>
        </div>
      </div>
      <img src={img} alt="" />
      <Button
        variant="contained"
        className="product__button"
        onClick={addToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
