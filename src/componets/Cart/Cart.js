import React from 'react';

const Cart = (props) => {
    const{cart}=props;
    
    const chooseHandel=()=>{
        console.log('confrim');
    }
    return (
        <div>
            <h2>Selected Items</h2>
                    <div>    
                       <h5> {cart}</h5>
              </div>
              <div>
              <button><h5>Choose 1 For Me</h5></button>
              </div> 
              <div>
              <button onClick={chooseHandel}><h5>Choose Again</h5></button>
              </div>
              <div>
                  <h2>You can buy it.</h2>
              </div>
        </div>
    );
};

export default Cart;