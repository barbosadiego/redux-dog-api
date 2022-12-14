import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDog } from '../actionCreators/actionCreators';
import DogImage from './DogImage';

const Card = () => {
  const store = useSelector((store) => store);
  const [dogImage, setDogImage] = useState('');
  const dispatch = useDispatch();
  const refSelect = useRef();
  console.log(store);

  useEffect(() => {
    dispatch(getDog());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemSelected = refSelect.current;
    const selectedValue =
      itemSelected.options[itemSelected.selectedIndex].value;
    setDogImage(selectedValue.replace('_', ''));
  };

  if (store.dogBreeds.length === 0) return <h1>Loading data...</h1>;

  return (
    <>
      <h1>Select the dog breed</h1>
      <form>
        <label htmlFor="dogs">Choose a dog:</label>
        <select ref={refSelect} name="dogs" id="dogs">
          {store.dogBreeds.map((item) => (
            <option key={item.id} value={item.image.id}>
              {item.name}
            </option>
          ))}
        </select>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      {dogImage && <DogImage img={dogImage} />}
    </>
  );
};

export default Card;
