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
    console.log(product);
      
    }
    return (
        <div>
           <h1 className='mouse'>Mouse dealer</h1>
          <div className='container-shop'>
          <div className='product-container second'>
          {
              products.map(product=><Product
              key={product.id}
              product={product}
              handeler={handeler}
              ></Product>)
          }
          </div>
          <div className='first'>
          <h2>Selected Items</h2>
                    <div>    
                        {cart}
              </div>
              <div>
              <button><h5>Choose 1 For Me</h5></button>
              </div>
              <div>
              <button><h5>Choose Again</h5></button>
              </div>
          </div>
          </div>
        </div>
    );
};

export default Shop;