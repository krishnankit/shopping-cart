import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Cartitem from './Cartitem';
import {cartContext} from '../Context'
import { useContext } from 'react';
import './cart.css'

const Cart = () => {

  const {cart, setCart} = useContext(cartContext)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])

  return (
    <div className='cart'>
      <div className="cart-list">
        {cart.map(prod => {
          return <Cartitem prod={prod} />
        })}
      </div>
      <div className="checkout">
        <h2>Subtotal ({cart.length}) items</h2>
        <h3>Total: </h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart