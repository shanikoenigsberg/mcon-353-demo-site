import "./App.css";
import { Home } from "../home/home";
import { Todo } from "../todo/todo.jsx";
import { Chat } from "../chat/chat";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/header";
import { TodoProvider } from "../state/context";

function App() {
  return (
    <div>
      <TodoProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" index element={<Todo />} />
            <Route path="/chats" index element={<Chat />} />
          </Routes>
        </HashRouter>
      </TodoProvider>
    </div>
  );
}

export default App;

