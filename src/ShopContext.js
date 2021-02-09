import React, { useState, createContext} from 'react';

export const ShopingContext = createContext();

console.log(ShopingContext)

const ShopingContextProvider = ({children}) => {
  const [saludo, setSaludo] = useState('Hola')

  return (
    <ShopingContext.Provider
      value={{
        saludo
      }}
    >
        {children}
    </ShopingContext.Provider>
  )
}

export default ShopingContextProvider