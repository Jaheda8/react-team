import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Actor.css'

const Actor = (props) => {
    const { name, img, age, home, salary, birth } = props.actor;

    return (
        <div className='main-body'>
   {/* Every Single actor card part */}
<div className='actors-container'>
    
<img className='image' src={img} alt="" />

<h3>{name}</h3>
<p>Age: {age}</p>
<p>Salary: {salary}</p>
<p>Home: {home}</p>
<p>Birth: {birth}</p>
<button onClick={()=>props.totalSalaryButton(props.actor)}><FontAwesomeIcon icon={faShoppingCart} /> Add Salary</button>


       </div>
       <br />  <br />
       </div>
    
    );
};

export default Actor;