// import { createStore } from "redux";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addTodo = (text) => {
//   return {
//     type: ADD,
//     text,
//     id: Math.floor(Math.random() * 1000000),
//   };
// };

// const deleteTodo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: action.payload }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

//after redux toolkit..
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], (builder) => {
//   builder.addCase(addToDo, (state, action) => {
//     // return [{ text: action.payload, id: action.payload }, ...state];
//     state.push({ text: action.payload, id: action.payload });
//   });
//   builder.addCase(deleteToDo, (state, action) => {
//     // return state.filter((toDo) => toDo.id !== action.payload);
//     return state.filter((toDo) => toDo.id !== action.payload);
//   });
// });
//after redux toolkit..

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: action.payload });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });
// export const actionCreators = { add, remove };

export const { add, remove } = toDos.actions;

export default store;
