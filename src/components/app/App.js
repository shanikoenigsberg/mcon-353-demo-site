import logo from "../../../src/logo.svg";
import "./App.css";
import { Home } from "../home/home";
import { Todo } from "../todo/todo.jsx";
import React, { useState } from "react";

function App() {
  return (
    <div>
      {/*<Home />*/}
      <Todo />
    </div>
  );
}

export default App;
