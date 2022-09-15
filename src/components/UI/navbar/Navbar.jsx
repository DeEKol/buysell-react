import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/about'>О сайте</Link>
      {/* <Link to='/product'>Продукт</Link>
      <Link to='/product_type'>Тип продукта</Link> */}
    </div>
  )
}

export default Navbar;