import React from 'react';
import Comment from '../Comment';

const CommentList = () => (
  <div className="App_comments">
    <Comment
      message="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem"
      author="adrian"
    />
    <Comment
      message="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem"
      author="adrian2"
    />
    <Comment
      message="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem"
      author="adrian3"
    />
    <Comment
      message="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem"
      author="adrian4"
    />
    <Comment
      message="lorem loremlorem loremlorem loremlorem lorem lorem loremlorem
                loremlorem lorem lorem lorem lorem loremlorem loremlorem
                loremlorem loremlorem loremlorem lorem"
      author="adrian5"
    />
  </div>
);

export default CommentList;
