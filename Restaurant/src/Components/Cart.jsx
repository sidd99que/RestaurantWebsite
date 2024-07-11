// src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementItem } from '../store/actions/cartActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  return (
    <div className="container mt-5" style={{height:'70vh'}}>
      <h2 className="text-center">YOUR FAV ITEMS</h2>
      <div className="row">
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.idCategory} className="col-12 mb-3">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{item.strCategory}</h5>
                    <p className="card-text">${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div>
                    <button className="btn btn-danger me-2" onClick={() => handleRemove(item.idCategory)}>Remove</button>
                    <button className="btn btn-success" onClick={() => handleIncrement(item.idCategory)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
