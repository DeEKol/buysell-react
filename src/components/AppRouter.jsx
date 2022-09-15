import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} key="/about" />
      {/* <Route path='/product' element={<Product />} key="/product" />
      <Route path='/product_type' element={<ProductType />} key="/product_type" /> */}
    </Routes>
  )
}

export default AppRouter;