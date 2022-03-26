import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handeler=(product)=>{
      const newCart=[...cart,product.name]
      setCart(newCart);
    // console.log(product);
    }
    
    return (
        <div>
           <h1 className='mouse'>Mouse dealer</h1>
          <div className='container-shop container'>
          <div className='product-container second'>
          {
              products.map(product=><Product
              key={product.id}
              product={product}
              handeler={handeler}
              ></Product>)
          }
          </div>
          {/* part of cart */}
          <div>
          <Cart cart={cart}></Cart>
          </div>
          </div>
        </div>
    );
};

export default Shop;