import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
           <h1 className='mouse'>Mouse dealer</h1>
          <div className='container-shop'>
          <div className='product-container second'>
          {
              products.map(product=><Product
              key={product.id}
              product={product}
              ></Product>)
          }
          </div>
          <div className='first'>
              <Cart></Cart>
          </div>
          </div>
        </div>
    );
};

export default Shop;