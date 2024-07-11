// src/store/actions/cartActions.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId
  };
};

export const incrementItem = (itemId) => {
  return {
    type: INCREMENT_ITEM,
    payload: itemId
  };
};
