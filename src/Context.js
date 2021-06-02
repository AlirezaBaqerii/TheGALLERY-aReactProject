import React, { useState, useContext, useEffect } from 'react';
// import FetchPaintings from './Fetch';

const AppContext = React.createContext();

const url = 'https://api.artic.edu/api/v1/artworks?limit=20';
const searchUrl = 'https://api.artic.edu/api/v1/artworks/search?q=';

const AppProvider = ({ children }) => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(false);

  //searching
  const [searchTerm, setSearchTerm] = useState('');
  const [singlePainting, setSinglePainting] = useState([]);

  useEffect(() => {
    setPaintings([...paintings, singlePainting]);
  }, [singlePainting]);

  //fetching
  const FetchPaintings = async () => {
    setLoading(true);

    if (searchTerm) {
      setPaintings([]);
      const response = await fetch(`${searchUrl}${searchTerm}`);
      const fetchData = await response.json();
      const { data } = fetchData;

      if (data) {
        const arrResault = data.map((item) => {
          const { api_link } = item;
          return { api_link };
        });

        arrResault.map(async (item) => {
          const response = await fetch(item.api_link);
          const fetchData = await response.json();
          const { data } = fetchData;
          // console.log(data);
          // const { id, title, image_id, artist_title, artist_display } = data;
          // console.log(title);
          setSinglePainting(data);
        });
        setLoading(false);
        // const newPaintings = data.map((item) => {
        //   const { id, title, image_id, artist_title, artist_display } = item;
        //   return { id, title, image_id, artist_title, artist_display };
        // });
        // setPaintings(newPaintings);
        // setLoading(false);
        // console.log(paintings);
      }

      // console.log(fetchData);
    }

    if (!searchTerm) {
      try {
        const response = await fetch(`${url}`);
        const fetchedData = await response.json();
        const { data } = fetchedData;
        if (data) {
          const newPaintings = data.map((item) => {
            const {
              id,
              title,
              image_id,
              artist_display,
              category_titles,
              classification_title,
              place_of_origin,
            } = item;
            return {
              id,
              title,
              image_id,
              artist_display,
              category_titles,
              classification_title,
              place_of_origin,
            };
          });
          setPaintings(newPaintings);

          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        // setLoading(false);
      }
    }
  };
  useEffect(() => {
    FetchPaintings();
  }, [searchTerm]);

  const [toggle, setToggle] = useState(false);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        paintings,
        setSearchTerm,
        toggle,
        setToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
