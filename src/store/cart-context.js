// Step 1: generally create the context...
// Manage context in some other component e.g CartProvider using useState or useReducer or whatever

import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
