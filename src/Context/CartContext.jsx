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

const deleteFromCart = (item) => {
  //Verificamos si esta en el carrito
  const productIsInCart = isInCart(item.item.id);
  if (!productIsInCart) {
    console.log("EL PRODUCTO NO ESTA EN EL CARRITO");
    return;
  }
  const deleteProduct = product.filter((prod) => prod.item.id !== item.item.id);
  setProducts([...deleteProduct]);
};

const isInCart = (id) => product.find((prod) => prod.item.id === id);

const precioTotal =(id)=>{
  return product.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
}

const iconCart =()=>{
  return product.reduce((acum, valor)=> acum + valor.quantity, 0) 
}

const clearCart = () => setProducts([]);


  
  return (
    <CartContext.Provider
      value={{
        product,
        addProduct,
        setProducts,
        clearCart,
        deleteFromCart,
        precioTotal,
        iconCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
