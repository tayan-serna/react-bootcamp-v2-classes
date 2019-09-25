import React from 'react';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

const CommentsWrapper = () => (
  <section className="App_comments-container">
    <CommentForm />
    <CommentList />
  </section>
);

export default CommentsWrapper;
