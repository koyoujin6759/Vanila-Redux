import React, { useState } from "react";
// import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { add } from "../store";
import ToDo from "../components/ToDo";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (text === "") return;
    dispatch(add(text));
    setText("");
  }

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      {/* <ul>{JSON.stringify(toDos)}</ul> */}
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </ul>
    </>
  );
}

// function mapStateToProps(state) {
//   return {
//     toDos: state,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text)),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
