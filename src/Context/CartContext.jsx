import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

const [product, setProducts] = useState([]);

const addProduct = (item, quantity) => {
  const index = product.findIndex(i => i.item.id === item.id)
    if (index > -1) {
      const oldQy = product[index].quantity
      product.splice(index, 1)
      setProducts([...product, { item, quantity: quantity + oldQy}])
    }
    else {
      setProducts([...product, {item, quantity}])
    }
}
console.log(product);
  
  return (
    <CartContext.Provider
      value={{
        product,
        addProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
