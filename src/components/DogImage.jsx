import React from 'react';

const DogImage = (image) => {
  return (
    <div>
      <img src={`https://cdn2.thedogapi.com/images/${image.img}.jpg`} alt="" />
    </div>
  );
};

export default DogImage;
