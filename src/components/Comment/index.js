import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
  <div className="App_comment">
    <p>{props.message}</p>
    <span>By: {props.author}</span>
  </div>
);

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Comment;
