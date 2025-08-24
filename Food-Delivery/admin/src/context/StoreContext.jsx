import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  const url = "http://localhost:4000"; // or your backend

  
  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id]--;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    url,
    token,
    setToken,
    admin,
    setAdmin,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;