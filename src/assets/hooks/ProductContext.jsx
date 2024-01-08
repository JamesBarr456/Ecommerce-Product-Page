import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const ProductContext = createContext();

// Proveer el contexto en un componente superior
export const ProductProvider = ({ children }) => {
  const [countProduct, setCountProduct] = useState(0);
  const [addToCart, setAddToCart] = useState(0);

  //Funcion que incrementa la cantidad de productos
  const increaseProducts = () => {
    setCountProduct(countProduct + 1);
  };
  //Funcion que decrese la cantidad de productos
  const decreaseProducts = () => {
    if (countProduct < 1) return;
    setCountProduct(countProduct - 1);
  };
  //Funcion que agrega el numero de productos a comprar al carrito
  const handleAddToCart = () => {
    setAddToCart(countProduct);
  };

  //Funcion al apretar el icono "trash" elimina los productos agregados
  const handleTrashCart = () => {
    setCountProduct(0);
    setAddToCart(0);
  };

  return (
    <ProductContext.Provider
      value={{
        countProduct,
        addToCart,
        increaseProducts,
        decreaseProducts,
        handleTrashCart,
        handleAddToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Crear un hook personalizado para acceder al contexto
export const useProductContext = () => {
  return useContext(ProductContext);
};
