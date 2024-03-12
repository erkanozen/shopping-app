import { createContext, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 1,
};

const reducerCart = (state, action) => {
  switch (action.type) {
    case "ADD":
      let updatedItems = [...state.items];
      updatedItems = [...state.items, action.item];
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.totalAmount,
      };
    case "REMOVE":
      let newCartItems = state.items.filter(
        (item) => action.cartitem.id !== item.id
      );

      return {
        items: newCartItems,
        totalAmount: state.totalAmount,
      };
    case "CLEAR":
      return {
        items: [],
        totalAmount: 0,
      };
    case "INCREASE":
      const increasedItems = state.items.map((item) => {
        if (item.id === action.itemId) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      const increasedTotalAmount = state.totalAmount + action.price;
      return {
        ...state,
        items: increasedItems,
        totalAmount: increasedTotalAmount,
      };
    case "DECREASE":
      const decreasedItems = state.items.map((item) => {
        if (item.id === action.itemId && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      const decreasedTotalAmount = state.totalAmount - action.price;
      return {
        ...state,
        items: decreasedItems,
        totalAmount: decreasedTotalAmount >= 0 ? decreasedTotalAmount : 0,
      };
    default:
      return state;
  }
};
const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(reducerCart, defaultCartState);
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addProduct: (item) => {
      dispatchCart({ type: "ADD", item });
    },
    removeProduct: (cartitem) => {
      dispatchCart({ type: "REMOVE", cartitem });
    },
    clearProduct: () => {
      dispatchCart({ type: "CLEAR" });
    },
    increase: (itemId, price) => {
      dispatchCart({ type: "INCREASE", itemId, price });
    },
    decrease: (itemId, price) => {
      dispatchCart({ type: "DECREASE", itemId, price });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
