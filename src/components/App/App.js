import { useState } from "react";
import Header from "../Header/Header";
import ToDo from "../ToDo/ToDo";
import ToDoForm from "../ToDoForm/ToDoForm";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [itemActive, setItemActive] = useState(1);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        filter: itemActive,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const editTask = (id, text) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.task = text;
          return todo;
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <div className="todo-block">
        <div className="container">
          <ToDoForm
            addTask={addTask}
            itemActive={itemActive}
            setItemActive={setItemActive}
          />
          {todos
            .filter((todo) => todo.filter === itemActive)
            .map((todo) => {
              return (
                <ToDo
                  todo={todo}
                  key={todo.id}
                  editTask={editTask}
                  removeTask={removeTask}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
