export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';

/* export const createComment = payload => (); */

export const createComment = function(payload) {
  return function(dispatch) {
    dispatch({
      type: CREATE_COMMENT_REQUEST
    });

    fetch('http://localhost:3004/comments', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: CREATE_COMMENT_SUCCESS,
          payload: res
        });
      })
      .catch(() => {
        dispatch({
          type: CREATE_COMMENT_FAILURE
        });
      });
  };
};
