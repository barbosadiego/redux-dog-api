import {
  GET_DOG_FAIL,
  GET_DOG_STARTED,
  GET_DOG_SUCCESS,
} from '../actionTypes/actionTypes';

export const getDog = () => {
  return (dispatch) => {
    dispatch(getDogStarted());

    fetch('https://api.thedogapi.com/v1/breeds')
      .then((res) => res.json())
      .then((json) => dispatch(getDogSuccess(json)))
      .catch((error) => dispatch(getDogFail(error)));
  };
};

const getDogStarted = () => {
  return {
    type: GET_DOG_STARTED,
  };
};

const getDogSuccess = (data) => {
  return {
    type: GET_DOG_SUCCESS,
    payload: { ...data },
  };
};

const getDogFail = (error) => {
  return {
    type: GET_DOG_FAIL,
    payload: { error },
  };
};
