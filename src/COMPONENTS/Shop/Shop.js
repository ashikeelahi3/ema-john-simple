import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

  const firstTenItem = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTenItem);
  const [ cart, setCart] = useState([])

  const handelAddProduct = (product) => {
    console.log("product added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {
          products.map(pd => <Product
            handelAddProduct = {handelAddProduct}
            product={pd}
          ></Product>)
        }
      </div>

      <div className="cart-container">
        {/* <h1>This is cart</h1>
        <h5>Order Summary: {cart.length}</h5> */}
        <Cart cart={cart}></Cart>
      </div>
      
    </div>
  );
};

export default Shop;