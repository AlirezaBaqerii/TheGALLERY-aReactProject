import { useGlobalContext } from './Context';

const url = 'https://api.artic.edu/api/v1/artworks';

const FetchPaintings = async () => {
  // const { setLoading } = useGlobalContext();

  // setLoading(true);

  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    // setLoading(false);
  }
};

export default FetchPaintings;
