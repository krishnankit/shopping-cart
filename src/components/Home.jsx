import React, { useContext, useEffect, useState } from 'react'
import {cartContext} from '../Context';
import Products from './Products';
import './home.css'


const Home = () => {
  const {products, setProducts} = useContext(cartContext)
  const {cart, setCart} = useContext(cartContext)
  const {allProducts, setAllProducts} = useContext(cartContext);
  const [sequence, setSequence] = useState('ascending')

  function handleRadio(e) {
    if (e.target.value === 'ascending') {
      setProducts(prod => {
        return prod.sort((a, b) => {return a.price - b.price})
      })
    }

    else {
      setProducts(prod => {
        return prod.sort((a, b) => {return b.price - a.price})
      })
    }
  }

  function handleRating(e) {
    console.log(e.target.value)
  }

  function clearFilters() {
    setProducts(allProducts);
  }
  // console.log(cart)

  return (
    <div className='home-container'>
      <div className="side-bar">
          <h2 className='filter-title'>Filter Products</h2>
        <ul className="filters">
          <li className="filter"><input type="radio" value='ascending' onChange={e => {handleRadio(e)}} name="sequence" id="sequence" /> Ascending</li>
          <li className="filter"><input type="radio" value='descending' onChange={e => {handleRadio(e)}} name="sequence" id="sequence" /> Descending</li>
          <li className="filter"><input type="checkbox" name="Include out of Stock" id="Include out of Stock" /> Include out of Stock</li>
          <li className="filter">
            <label htmlFor="rating">Rating: </label>
            <select name="rating" id="rating">
              <option value='1' onClick={(e) => {handleRating(e)}} >1</option>
              <option value='2' onClick={(e) => {handleRating(e)}} >2</option>
              <option value='3' onClick={(e) => {handleRating(e)}} >3</option>
              <option value='4' onClick={(e) => {handleRating(e)}} >4</option>
              <option value='5' onClick={(e) => {handleRating(e)}} >5</option>
            </select></li>
        </ul>
        <button className="clear-filters" onClick={clearFilters}>Clear Filters</button>
      </div>
     <Products products={products} cart={cart} setCart={setCart} />
    </div>
  );
}

export default Home