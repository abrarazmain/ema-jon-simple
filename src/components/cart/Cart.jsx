import React from "react";
import "./Cart.css";

const Cart = ({cart}) => {

    let total = 0
    let shipping = 0
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = total * 7 / 100
    const grandTotal = total + shipping + tax

  return (
    <div className="cart">
          <h2 className="cart-title">Order Summery</h2>
      <p>Selected Items:{cart.length}</p>
          <p>Total Price:${ total}</p>
          <p>Total Shipping:${ shipping}</p>
          <p>Tax:{ tax.toFixed(2)}</p>
          <h6 className="cart-title">Grand Total:${ grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
