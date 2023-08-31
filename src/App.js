import React, { useEffect, useState } from 'react';
import { fetchCats } from './api';
import { fetchDogs } from './api';
import Desktop from './components/index';

function App(){
  const [catImage, setCatImage] = useState(null);
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      const data = await fetchCats();
      if (data && data.length > 0) {
        const imageUrl = data[0].url;
        setCatImage(imageUrl);
      }
    };

    fetchCatImage();
  }, []);

  useEffect(() => {
    const fetchDogsImage = async () => {
      const data = await fetchDogs();
      if (data && data.length > 0) {
        const imageUrl = data[0].url;
        setDogImage(imageUrl);
      }
    };

    fetchDogsImage();
  }, []);

  if (!catImage || !dogImage) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Desktop />
      <h2>Cat Image</h2>
      <img src={catImage} alt="Cat" height={250}/>

      <h2>Dog Image</h2>
      <img src={dogImage} alt="dog" height={250} />
      <br></br>
    </div>
  );
}


export default App;