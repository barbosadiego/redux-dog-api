import {
  GET_DOG_FAIL,
  GET_DOG_STARTED,
  GET_DOG_SUCCESS,
} from '../actionTypes/actionTypes';

const initialState = {
  loading: false,
  dogBreeds: [],
  error: null,
};

const dogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DOG_STARTED:
      return {
        ...state,
        loading: true,
      };

    case GET_DOG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        dogBreeds: payload,
      };

    case GET_DOG_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default dogReducer;
