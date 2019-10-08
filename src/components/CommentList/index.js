import React from 'react';
import { connect } from 'react-redux';
import Comment from '../Comment';

const CommentList = props => (
  <div className="App_comments">
    {props.comments.map(comment => (
      <Comment
        message={comment.comment}
        author={comment.author}
        key={comment.id}
      />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
