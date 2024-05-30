import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(() => {

    
    const savedProduct = localStorage.getItem('selectedProduct');
    return savedProduct ? JSON.parse(savedProduct) : null;
  });


  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    }
  }, [selectedProduct]);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
