import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Actors.css'

//state for cart and actors
const Actors = () => {
    const [actors, setActors]=useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('./actors.JSON')
        .then(res=>res.json())
        .then(data=>setActors(data))
    },[])

    //Salary Button
    const totalSalaryButton =(actor)=>{
const newSalary= [...cart, actor];
setCart(newSalary);
    };

    return (
     <div className='body-container'>
<div className='container'> 
          {
              actors.map(actor=><Actor key={actor.key} actor={actor} name={actor.name} totalSalaryButton={totalSalaryButton}></Actor>)
          }
        </div>

{/* Cart components */}
        <div className='actors-salary'>
            <Cart className='cart-style' cart={cart}></Cart>
        </div>
     </div>
    );
};

export default Actors;