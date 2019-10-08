import { CREATE_COMMENT } from '../actions/comments';

const getId = (() => {
  let idCounter = 0;
  return () => idCounter++;
})();

const commentReducer = (state = [], action) => {
  console.log(action);
  if (action.type === CREATE_COMMENT) {
    return [...state, { ...action.payload, id: getId() }];
  }
  return state;
};

export default commentReducer;
