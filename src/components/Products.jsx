import React from 'react'
import Product from "./Product"

const Products = ({products, cart, setCart}) => {
  return (
    <div className="productContainer">
      {products.map(prod => {
        return <Product prod={prod} cart={cart} setCart={setCart} />
      })}
    </div>
  )
}

export default Products