import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const cartContext = createContext()

const Context = ({children}) => {

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])

  return (
    <cartContext.Provider value={{cart, setCart, products, setProducts, allProducts, setAllProducts}} >
      {children}
    </cartContext.Provider>
  )
}

export default Context