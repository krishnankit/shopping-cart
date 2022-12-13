import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../Context'
import './cartitem.css'

const Cartitem = ({prod}) => {

  const {cart, setCart} = useContext(cartContext)

  function deleteItem() {
    setCart(cart.filter(item => item.id !== prod.id))
  }

  return (
    <div className="cart-item">
      <img className='item-element' src={prod.thumbnail} alt={prod.title} />
      <h4 className="item-element" id='title'>{prod.title}</h4>
      <h4 className="item-element" id='price'>₹ {prod.price}</h4>
      <h2 className="item-element" id='rating'>Rating: {prod.rating}</h2>
      <select className='item-element' name="quantity" id="quantity">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button className="item-element" id='delete-button' onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default Cartitem