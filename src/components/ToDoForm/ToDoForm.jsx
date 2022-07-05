import { useState } from "react";
import add from "../../resourses/img/svg/Add.svg";

import Filter from "./Filter/Filter";

import "./ToDoForm.css";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className="todo" onSubmit={handleSubmit}>
      <Filter />
      <div className="todo__inner">
        <input
          className="todo__input"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          type="text"
          placeholder="Введите текст..."
        />

        <button className="todo__button">
          <span className="todo__button-text">Добавить</span>{" "}
          <img className="todo__button-img" src={add} alt="add" />
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
