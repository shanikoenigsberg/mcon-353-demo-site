import React from "react";
import { useState, useContext } from "react";
import { Checkbox, TextField } from "@mui/material";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { TodoContext } from "../state/context";

export const Todo = (props) => {
  const [inputText, setInputText] = useState({ text: "", isComplete: false });

  const { myTodos, setTodos } = useContext(TodoContext);

  function addTodo(inputText) {
    const newTodos = [...myTodos, { text: inputText.text, isComplete: false }];
    setTodos(newTodos);
  }

  function deleteTodo(deletedTodo) {
    setTodos(myTodos.filter((todo) => todo.text !== deletedTodo));
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
              placeholder="add task"
              onChange={(event) => setInputText({ text: event.target.value })}
            ></TextField>
          </td>
          <td colSpan={2} className="plus">
            <Button onClick={() => addTodo(inputText)}>+</Button>
          </td>
        </tr>

        {myTodos.map((todo) => (
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
    <div data-testid="todo-item">
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
    </div>
  );
};
