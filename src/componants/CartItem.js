import React from 'react';
import { Link } from 'react-router-dom';

import './CartItem.css';

const CartItem = ({ id, title, image_id, artist_display }) => {
  return (
    <Link to={`/artworks/${id}`}>
      <article className='cart-item'>
        <img
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt={title}
        />
        <div className='info'>
          <h1>{title}</h1>
          {/* <h4>{artist_title}</h4> */}
          <h4>{artist_display}</h4>
        </div>
      </article>
    </Link>
  );
};

export default CartItem;
