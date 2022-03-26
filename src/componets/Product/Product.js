import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    const{name,img,price}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>name:{name}</h5>
            <p>Price:{price}</p>
        </div>
    );
};

export default Product;