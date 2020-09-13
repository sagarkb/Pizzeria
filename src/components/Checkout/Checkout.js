import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Checkout.css';
import PizzaMan from '../../assets/PizzaMan.png';

const Checkout = ({ ingredients }) => {
  const history = useHistory();
  const [order, setOrder] = useState(false);
  return (
    <div className='top'>
      <div className='another extra'>
        <h1 style={{ fontFamily: 'Comfortaa' }}>My Ingredients</h1>
        <div>
          {Object.keys(ingredients).reduce((acc, ing) => {
            return acc + ingredients[ing] ? 1 : 0;
          }, 0) === 0 && <p className='convert'>NO ingredients Selected</p>}
          {Object.keys(ingredients).map((ingredient) => {
            return (
              ingredients[ingredient] && (
                <p key={ingredient} className='convert'>
                  {ingredient}
                </p>
              )
            );
          })}
        </div>
        <button className='proceedToCheckout' onClick={() => setOrder(true)}>
          Proceed
        </button>
        <button className='proceedToCheckout' onClick={() => history.push('/')}>
          Go Back
        </button>
      </div>
      <div>
        {order && (
          <div className='order'>
            <img src={PizzaMan} alt='PizzaMan' height='300px' />
            <div className='order1'>
              We have recieved your order, thank you!!
            </div>
            <div className='order2'>
              Order #{Math.round(Math.random() * 1000)}
            </div>
            <div className='order3'>Will be ready in 20-30 mins</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
