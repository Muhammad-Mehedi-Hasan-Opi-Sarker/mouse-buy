import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({handeler,product}) => {
    // const {handeler,product}=props;
    // console.log(props)
    const{name,img,price}=product;
    return (
        <div className='product'>
            <img className='img-100' src={img} alt="" />
            <h5>{name}</h5>
            <p>Price:${price}</p>
            <button onClick={()=>handeler(product)} className='btn'>Add to cart 
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;