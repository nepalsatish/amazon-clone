import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h3>Hello, {user ? `${user?.email}` : `Guest`}</h3>
        <h2 className="checkout__title">Your Shopping Cart</h2>

        {cart.map((item, i) => {
          return (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
