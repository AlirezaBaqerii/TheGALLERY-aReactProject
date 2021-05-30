import React from 'react';
import { useGlobalContext } from '../Context';
import './filter.css';
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiFillApple,
} from 'react-icons/ai';

const Filter = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchValue = React.useRef('');
  const searching = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue.current.value);
    console.log(searchValue.current.value);
  };

  return (
    <section className='filter'>
      <div className='sub-filter'>
        <div className='search '>
          <form className='form' onSubmit={(e) => searching(e)}>
            <input
              className='input '
              type='text'
              placeholder='Search'
              ref={searchValue}
              // onChange={searching}
            />
            <button className='btn btn-search' type='submit'>
              <AiOutlineSearch
                style={{
                  fontSize: '20px',
                }}
              />
            </button>
          </form>
        </div>
        <div className='items'>
          <p>2141 Items</p>
        </div>
      </div>
      <div className='sub-filter'>
        <div className='browse'>
          <button className='btn'>Browse</button>
        </div>
        <div className='show'>Show: 30 / 50/ 70</div>
      </div>
    </section>
  );
};

export default Filter;
