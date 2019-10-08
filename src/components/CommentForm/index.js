import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createComment } from '../../actions/comments';

const CommentForm = props => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.createComment({ author, comment });
    setAuthor('');
    setComment('');
  };

  return (
    <div className="App_form">
      <form onSubmit={handleSubmit}>
        <div className="App_label-group">
          <label>Name:</label>
          <input
            value={author}
            onChange={e => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <div className="App_label-group">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={e => {
              setComment(e.target.value);
            }}
          />
        </div>
        <button disabled={!author || !comment} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createComment
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
