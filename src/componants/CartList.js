import React from 'react';
import './CartList.css';
import CartItem from './CartItem';
import Loading from '../componants/Loading';
import { useGlobalContext } from '../Context';

const CartList = () => {
  const { paintings, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <article className='cart-container-wrapper'>
      <article className='cart-container'>
        {paintings.map((painting) => {
          const { id } = painting;
          if (id !== undefined) {
            return <CartItem key={id} {...painting} />;
          }
        })}
      </article>
    </article>
  );
};

export default CartList;
