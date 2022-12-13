import React from 'react'

const Product = ({prod, cart, setCart}) => {
  function addToCart() {
    setCart([...cart, prod])
  }

  function remove() {
    setCart(cart.filter(p => p.id !== prod.id))
  }
  return (
     <div className="products">
      <img src={prod.thumbnail} alt={prod.title} />
      <div className="productDesc">
        <span style={{fontWeight: 700}}>{prod.title}</span>
        <span>₹ {prod.price}</span>
      </div>
      {cart.includes(prod) ?  <button className="remove" onClick={remove}>Remove from Cart</button> : <button className="add" onClick={addToCart}>Add to Cart</button>}
     </div>
  );
}

export default Product