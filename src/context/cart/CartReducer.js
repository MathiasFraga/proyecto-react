import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, DELETE_CART } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: true,
      };
    }
    case ADD_TO_CART: {

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case DELETE_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems]
      }
    }  

    default:
      return state;
  }
};

export default CartReducer;
