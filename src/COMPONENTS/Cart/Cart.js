import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const formateNumber = num => Number(num.toFixed(2));

  const cart  = props.cart;
  console.log(cart);
  let total = cart.reduce((total, product) => total + product.price, 0);
  total = formateNumber(total);
  const tax = formateNumber(total / 10);

  let shipping = 0;
  if ((total <= 35)&&(total >= 15)) {
    shipping = 4.99;
  } else if ((total < 15) && (total > 0)) {
    shipping = 12.99;
  }

  const grandTotal = formateNumber(total + shipping + tax);



  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: ${total}</p>
      <p><small>Shipping Cost: ${shipping}</small></p>
      <p><small>Tax + VAT: ${tax}</small></p>
      <p>Total Price: ${grandTotal}</p>
    </div>
  );
};

export default Cart;