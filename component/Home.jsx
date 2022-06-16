import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <div className Name='hero'>
      <div className ="card bg-dark text-white border-0">
  <img src="/images/banner1.png" className ="card-img" alt="background "/>
  <div className ="card-img-overlay d-flex flex-column justify-content-center">
      <div className Name="container">
    <h5 className ="card-title display-3 fw-bolder mb-0">Découvrir nos offres</h5>
    <p className ="card-text lead fs-2">Lorem ipsum dolor sit amet</p>
</div>
  </div>
</div>
{/* <Product/> */}
    </div>
  );
}

export default Home;
