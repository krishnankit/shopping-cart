import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../Context'
import './header.css'

const Header = () => {
  const {products, setProducts} = useContext(cartContext)
  const {cart, setCart} = useContext(cartContext)
  const [search, setSearch] = useState('')
  const {allProducts, setAllProducts} = useContext(cartContext)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data =>{
      console.log(data.products)
      setAllProducts(data.products)
      setProducts(data.products)
    })
  }, [])

  const navigate = useNavigate()
  function gotoCart() {
    navigate('/cart')
  }
  
  function gotoHome() {
    navigate('/')
  }

  function handleChange(e) {
    setSearch(e.target.value)
    if (search === '') {
      setProducts(allProducts)
    }
    else {
      setProducts(allProducts.filter(item => item.title.includes(search)))
    }
  }

  return (
    <div className='navbar'>
      <h1 className="navbar-brand" onClick={gotoHome}>Shopping Cart</h1>
      <div className="search"><input type="text" name="search-item" id="search-item"  placeholder='Search' onChange={(e) => {handleChange(e)}} value={search} /></div>
      <button onClick={gotoCart} className='cart-button'>Cart {cart.length > 0 && <p>({cart.length})</p>}</button>
    </div>
  )
}

export default Header