import logo from "../../../src/logo.svg";
import "./App.css";
import { Home } from "../home/home";
import { Todo } from "../todo/todo.jsx";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/header"

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" index element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
