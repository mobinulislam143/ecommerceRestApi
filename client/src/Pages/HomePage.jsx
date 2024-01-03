import React from 'react';
import Carousel from '../components/Carousel';
import Product from '../components/Product/Product';


function HomePage(props) {
    return (
       <>
        <div>
          <Carousel/>
          <Product/>
        </div>
       </>
    );
}

export default HomePage;