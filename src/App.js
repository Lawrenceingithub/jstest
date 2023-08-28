import React, { useEffect, useState } from 'react';
import { fetchCats } from './api';
import { fetchDogs } from './api';

function App() {
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
      <h2>Cat Image</h2>
      <img src={catImage} alt="Cat" height={250}/>

      <h2>Dog Image</h2>
      <img src={dogImage} alt="dog" height={250} />
      <br></br>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d461.7846306648035!2d113.54636141676356!3d22.191575283890508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2s!4v1693231165689!5m2!1szh-TW!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  );
}

export default App;