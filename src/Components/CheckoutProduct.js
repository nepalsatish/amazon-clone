import { Button } from "@material-ui/core";
import React from "react";
import "./CheckoutProduct.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, img, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeProduct = () => {
    //remove item from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={img} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <h4 className="checkoutProduct__title">{title}</h4>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
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
        {!hideButton && (
          <Button variant="contained" color="secondary" onClick={removeProduct}>
            Remove Product
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
