import React from 'react';
import { connect } from 'react-redux';

const CommentForm = props => {
  console.log(props);
  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({
      type: 'SOME TYPE'
    });
  };

  return (
    <div className="App_form">
      <form onSubmit={handleSubmit}>
        <div className="App_label-group">
          <label>Name:</label>
          <input />
        </div>
        <div className="App_label-group">
          <label>Comment:</label>
          <textarea />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentForm);
