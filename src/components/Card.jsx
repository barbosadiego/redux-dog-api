import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDog } from '../actionCreators/actionCreators';

const Card = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(store);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDog());
  };

  return (
    <>
      <h1>Select the dog breed</h1>
      <form>
        <label htmlFor="dogs">Choose a dog:</label>
        <select name="dogs" id="dogs">
          <option value="ex1">ex1</option>
          <option value="ex2">ex2</option>
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
