import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import './Customize.css';
import PizzaBase from '../../assets/PizzaBase.png';
import Tomato from '../../assets/Tomato.png';
import Pineapple from '../../assets/Pineapple.png';
import Olive from '../../assets/Olive.png';
import Mushroom from '../../assets/Mushroom.png';
import Basil from '../../assets/Basil.png';
import BaseCheese from '../../assets/BaseCheese.png';

const Customize = ({ ingredients, setIngredients }) => {
  let history = useHistory();
  const changeIngredient = (event, name) => {
    localStorage.clear();

    let newIngredients = { ...ingredients };
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem('ingredients', JSON.stringify(newIngredients));
  };

  return (
    <React.Fragment>
      <div className='Top'>
        <div className='Middle'>
          <div className='Between'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: ingredients['cheese'] ? 1 : 0,
              }}
              transition={{ duration: 0.6 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <img
                src={BaseCheese}
                alt='Pizza Base'
                height='100%'
                width='100%'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: ingredients['tomato'] ? 100 : -100,
                opacity: ingredients['tomato'] ? 1 : 0,
              }}
              transition={{ duration: 1 }}
              style={{ position: 'absolute', marginTop: -100 }}
            >
              <img src={Tomato} alt='Pizza Base' height='100%' width='100%' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: ingredients['pineapple'] ? 100 : -100,
                opacity: ingredients['pineapple'] ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', marginTop: -100 }}
            >
              <img
                src={Pineapple}
                alt='Pizza Base'
                height='100%'
                width='100%'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: ingredients['olive'] ? 100 : -100,
                opacity: ingredients['olive'] ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', marginTop: -100 }}
            >
              <img src={Olive} alt='Pizza Base' height='100%' width='100%' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: ingredients['basil'] ? 100 : -100,
                opacity: ingredients['basil'] ? 1 : 0,
              }}
              transition={{ duration: 1 }}
              style={{ position: 'absolute', marginTop: -100 }}
            >
              <img src={Basil} alt='Pizza Base' height='100%' width='100%' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: ingredients['mushroom'] ? 100 : -100,
                opacity: ingredients['mushroom'] ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{ position: 'absolute', marginTop: -100 }}
            >
              <img src={Mushroom} alt='Pizza Base' height='100%' width='100%' />
            </motion.div>
            <motion.div transition={{ duration: 0.5 }}>
              <img
                src={PizzaBase}
                alt='Pizza Base'
                height='100%'
                width='100%'
              />
            </motion.div>
          </div>
        </div>
        <div className='Middle extra'>
          <label className='container-checkbox'>
            Pineapple
            <input
              type='checkbox'
              checked={ingredients['pineapple']}
              onChange={(event) =>
                changeIngredient(event.currentTarget.checked, 'pineapple')
              }
            />
            <span className='checkmark'></span>
          </label>
          <label className='container-checkbox'>
            Basil
            <input
              type='checkbox'
              checked={ingredients['basil']}
              onChange={(event) =>
                changeIngredient(event.currentTarget.checked, 'basil')
              }
            />
            <span className='checkmark'></span>
          </label>
          <label className='container-checkbox'>
            Tomato
            <input
              type='checkbox'
              checked={ingredients['tomato']}
              onChange={(event) =>
                changeIngredient(event.currentTarget.checked, 'tomato')
              }
            />
            <span className='checkmark'></span>
          </label>
          <label className='container-checkbox'>
            Mushroom
            <input
              type='checkbox'
              checked={ingredients['mushroom']}
              onChange={(event) =>
                changeIngredient(event.currentTarget.checked, 'mushroom')
              }
            />
            <span className='checkmark'></span>
          </label>
          <label className='container-checkbox'>
            Cheese
            <input
              type='checkbox'
              checked={ingredients['cheese']}
              onChange={(event) =>
                changeIngredient(event.currentTarget.checked, 'cheese')
              }
            />
            <span className='checkmark'></span>
          </label>
          <label className='container-checkbox'>
            Olive
            <input
              type='checkbox'
              checked={ingredients['olive']}
              onChange={(event) =>
                changeIngredient(event.currentTarget.checked, 'olive')
              }
            />
            <span className='checkmark'></span>
          </label>
          <button
            className='proceedToCheckout'
            onClick={() => history.push('/checkout')}
          >
            Proceed to Checkout
          </button>
          <h2>Check the ingredient box to add ingredients!!!</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Customize;
