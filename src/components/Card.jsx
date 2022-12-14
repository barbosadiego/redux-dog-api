import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDog } from '../actionCreators/actionCreators';

const Card = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(store);

  useEffect(() => {
    dispatch(getDog());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (store.dogBreeds.length === 0) return <h1>Loading data...</h1>;

  return (
    <>
      <h1>Select the dog breed</h1>
      <form>
        <label htmlFor="dogs">Choose a dog:</label>
        <select name="dogs" id="dogs">
          {store.dogBreeds.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Card;
