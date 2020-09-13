import React from 'react';

import './Header.css';
import PizzaLogo from '../../assets/pizzalogo.png';

const Header = () => {
  return (
    <div className='Heading'>
      <div className='Heading-color'>
        <img src={PizzaLogo} alt='PIzzaLogo' height='40px' />
        <div className='Heading2'>
          <h3 style={{ display: 'inline-block' }}>𝕻𝖎𝖟𝖟𝖊𝖗𝖎𝖆</h3>-The Pizza
          Customization App
        </div>
      </div>
    </div>
  );
};

export default Header;
