import React from 'react';

const Card = () => {
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Card;
