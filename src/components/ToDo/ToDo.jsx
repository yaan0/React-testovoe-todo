import { useState } from "react";
import React from "react";

import Delete from "../../resourses/img/svg/Delete.svg";
import Pencil from "../../resourses/img/svg/Pencil.svg";

import "./ToDo.css";
const ToDo = ({ todo, editTask, removeTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.task);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      editTask(todo.id, text);
      setIsEdit(false);
    }
  };

  return (
    <div className="todo__item" key={todo.id}>
      {isEdit ? (
        <input
          className="todo__item-input"
          defaultValue={todo.task}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      ) : (
        todo.task
      )}

      <div className="todo__item-buttons">
        <img
          className="todo__item-btn"
          onClick={() => removeTask(todo.id)}
          src={Delete}
          alt="delete"
        />

        <img
          className="todo__item-btn"
          onClick={() => {
            setIsEdit(!isEdit);
          }}
          src={Pencil}
          alt="pencil"
        />
      </div>
    </div>
  );
};

export default ToDo;
