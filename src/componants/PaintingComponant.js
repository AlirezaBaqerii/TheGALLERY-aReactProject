import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { FaTimes } from 'react-icons/fa';
import './PaintingComponant.css';

const PaintingComponant = () => {
  const { id } = useParams();

  const { paintings } = useGlobalContext();

  const [painting, setPainting] = React.useState({});

  const findPainting = () => {
    paintings.map((painting) => {
      if (painting.id === parseInt(id)) {
        setPainting(painting);
      }
    });
  };

  React.useEffect(() => {
    findPainting();
  }, []);

  const {
    title,
    image_id,
    artist_display,
    category_titles,
    classification_title,
    place_of_origin,
  } = painting;
  console.log(title);
  return (
    <article className='articale'>
      <Link to='/'>
        <FaTimes className='exit-btn' />
      </Link>
      <div className='container'>
        <img
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt={title}
        />
        <div className='info'>
          <div className='title'>
            <h1>{title}</h1>
            <h4>{artist_display}</h4>
          </div>
          <div className='painting-info'>
            <div className='a-info'>
              <h4 className='info-type '>Orign: </h4>
              <h4>{place_of_origin}</h4>
            </div>
            <div className='a-info'>
              <h4 className='info-type '>Form : </h4>
              <h4>{classification_title}</h4>
            </div>
            <div className='a-info'>
              <h4 className='info-type '>Category: </h4>
              <h4>{category_titles}</h4>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PaintingComponant;
