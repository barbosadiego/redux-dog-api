import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDog } from '../actionCreators/actionCreators';
import DogImage from './DogImage';
import styled from 'styled-components';

const Card = () => {
  const store = useSelector((store) => store);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const refSelect = useRef();

  useEffect(() => {
    dispatch(getDog());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemSelected = refSelect.current;
    setIndex(itemSelected.selectedIndex);
  };

  if (store.dogBreeds.length === 0) return <h1>Loading data...</h1>;

  return (
    <StyledCard>
      <h1>
        the<span>dog</span>api
      </h1>
      <form>
        <label htmlFor="dogs">Choose a dog:</label>
        <select ref={refSelect} name="dogs" id="dogs">
          {store.dogBreeds.map((item) => (
            <option key={item.id} value={item.image.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <DogImage index={index} />
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 30px;

  * {
    font-family: 'Fira Sans', sans-serif;
  }

  h1 {
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 0;
    text-transform: uppercase;
    color: grey;

    span {
      color: black;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  select {
    padding: 0.5rem 1rem;
    outline: none;
    margin-inline: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: grey;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 3px;
    transition: all 0.1s;
    font-family: inherit;
    text-transform: uppercase;

    &:active {
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.3);
    }
  }
`;
