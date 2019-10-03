import { CREATE_COMMENT } from '../actions/comments';

const commentReducer = (state = [], action) => {
  if (action.type === CREATE_COMMENT) {
    return state; // TODO => CREATE COMMENT
  }
  if (action.type === 'SOME TYPE') {
    console.log('FROM REDUCER');
    return state;
  }
  return state;
};

export default commentReducer;
