import logo from "../../../src/logo.svg";
import "./App.css";
import { Home } from "../home/home";
import { Todo } from "../todo/todo.jsx";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/header"

export const TodoContext = React.createContext();

function App() {

  const[myTodos, setTodos] = useState([]);    
  

  return (
    <div>
      
      <TodoContext.Provider
        value= {{
          myTodos,
          setTodos,
        }}
      >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" index element={<Todo />} />
        </Routes>
      </BrowserRouter>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
