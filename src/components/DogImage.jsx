import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DogImage = ({ index }) => {
  const store = useSelector((store) => store);
  const arrayStore = store.dogBreeds;

  return (
    <StyledImage>
      <img src={arrayStore[index].image.url} alt={arrayStore[index].name} />
      <p>Name: {arrayStore[index].name}</p>
      <p>Temperament: {arrayStore[index].temperament}</p>
      <p>Weigth (Kg): {arrayStore[index].weight.metric}</p>
      <p>Height (cm): {arrayStore[index].height.metric}</p>
      <p>Life span: {arrayStore[index].life_span}</p>
    </StyledImage>
  );
};

export default DogImage;

const StyledImage = styled.div`
  width: 500px;
  height: 500px;

  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }
`;
