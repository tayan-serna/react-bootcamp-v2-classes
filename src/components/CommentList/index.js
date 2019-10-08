import React from 'react';
import { connect } from 'react-redux';
import Comment from '../Comment';

const CommentList = props => {
  if (props.comments.loading) {
    return <span>Loading...</span>;
  }
  if (props.comments.error) {
    return <span>Something went wrong</span>;
  }
  return (
    <div className="App_comments">
      {props.comments.results.map(comment => (
        <Comment
          message={comment.comment}
          author={comment.author}
          key={comment.id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
