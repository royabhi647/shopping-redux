import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=>state.cart);
  return (
    <div className='nav'>
        <div className='nav-items'>
        <Link to='/' className='home-link'>Home</Link>
        <Link to='/cart' className='cart-link'>Cart</Link>
        </div>
        <span>Cart items: {items.length}</span>
    </div>
  )
}

export default Navbar