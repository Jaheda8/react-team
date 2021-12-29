import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, name}=props;
    console.log(name);

    const total=cart.reduce((previous, actor)=>previous+actor.salary, 0)
    return (
        <div className='cart-part'>
            <h2>Summary</h2>
            <p>Actors: {props.cart.length}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;