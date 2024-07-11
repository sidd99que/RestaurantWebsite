// src/store/reducers/cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM } from '../actions/cartActions';

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existingItem = state.items.find(i => i.idCategory === item.idCategory);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(i =>
            i.idCategory === item.idCategory ? { ...i, quantity: i.quantity + 1 } : i
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...item, quantity: 1, price: 10.00 }] // Assuming price is fixed for now
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(i => i.idCategory !== action.payload)
      };

    case INCREMENT_ITEM:
      return {
        ...state,
        items: state.items.map(i =>
          i.idCategory === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
