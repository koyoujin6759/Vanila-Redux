import React from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store";
import { useNavigate } from "react-router-dom";

function ToDo({ text, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDelete = () => {
    // dispatch(actionCreators.deleteToDo(id));
    dispatch(remove(id));
  };

  const moveDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <li>
      <p onClick={moveDetail}>{text}</p>
      <button onClick={onDelete}>del</button>
    </li>
  );
}
// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     onDelete: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
//   };
// }
// export default connect(null, mapDispatchToProps)(ToDo);
export default ToDo;
