import React from "react";
import { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { alignProperty } from "@mui/material/styles/cssUtils";

export const Todo = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState({ text: "", isComplete: false });

  function addTodo() {
    const newTodos = [...todos, { text: inputText.text, isComplete: false }];
    setTodos(newTodos);
  }

  function deleteTodo(deletedTodo) {
    //if return true, keep if returns false, will remove it
    setTodos(todos.filter((todo) => todo.text !== deletedTodo));
  }

  return (
    //add
    <div>
      <table cellSpacing={0}>
        <tr>
          <td colSpan={3} className="title">
            <h1>Todo</h1>
          </td>
        </tr>
        <tr className="input">
          <td>
            <TextField
              id="standard-basic"
              label="enter task"
              variant="standard"
              onChange={(event) => setInputText({ text: event.target.value })}
            ></TextField>
          </td>
           <td colSpan={2} className="plus">
            <Button onClick={addTodo}>+</Button>
          </td>
        </tr>

        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            isComplete={todo.isComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </table>
    </div>
  );
};

const TodoItem = (props) => {
  return (
    <tr className="list">
      <td className="name">{props.text}</td>
      <td className="checkbox">
        <Checkbox checked={props.isCompleted}></Checkbox>
      </td>
      <td className="garbage">
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => props.deleteTodo(props.text)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </td>
    </tr>
  );
};
