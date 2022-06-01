import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { Store } from "react-notifications-component";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromeBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    //Notification
    Store.addNotification({
      title: title,
      message: "DELETE ITEM!",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromeBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
