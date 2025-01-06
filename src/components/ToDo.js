import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
function ToDo({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>del</button>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelete: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
