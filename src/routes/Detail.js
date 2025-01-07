import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { actionCreators } from "../store";

function Detail() {
  const { id } = useParams();
  const toDos = useSelector((state) => state.find((toDo) => toDo === parseInt(id)));
  const toDoText = toDos.text;

  return (
    <>
      <h2>id : {id}</h2>
      <p>detail : {toDoText}</p>
    </>
  );
}
export default Detail;
