import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../actions/comments';

const initialState = {
  results: [],
  loading: false,
  error: false
};

const commentReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === CREATE_COMMENT_REQUEST) {
    return {
      ...state,
      loading: true,
      error: false
    };
  }
  if (action.type === CREATE_COMMENT_SUCCESS) {
    return {
      ...state,
      results: [...state.results, action.payload],
      loading: false,
      error: false
    };
  }
  if (action.type === CREATE_COMMENT_FAILURE) {
    return {
      ...state,
      loading: false,
      error: true
    };
  }
  return state;
};

export default commentReducer;
