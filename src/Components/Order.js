import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h4>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</h4>
      <p className="order__id">
        <small>
          <b>Order id:&nbsp;</b>
          {order.id}
        </small>
      </p>
      {order.data.cart?.map((item, index) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">
            <strong>Order Total: {value}</strong>
          </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
