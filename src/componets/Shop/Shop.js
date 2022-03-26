import React, { useEffect, useState } from 'react';
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
           <h1>Mouse dealer</h1>
          <div>
          {
              products.map(product=>console.log(product))
          }
          </div>
          <div>
              <h2>Selected Items</h2>
          </div>
        </div>
    );
};

export default Shop;