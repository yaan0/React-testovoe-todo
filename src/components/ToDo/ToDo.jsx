import { useState } from "react";
import React from "react";

import Delete from "../../resourses/img/svg/Delete.svg";
import Pencil from "../../resourses/img/svg/Pencil.svg";

import "./ToDo.css";
const ToDo = ({ todo, editTask, removeTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.task);
  const [isActive, setIsActive] = useState(false);

  const btnsStyleBlock = isActive
    ? "todo__item-buttons_block"
    : "todo__item-buttons";

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

      <button
        className="todo__item-open-btns"
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={btnsStyleBlock}>
        <div onClick={() => removeTask(todo.id)}>
          <img className="todo__item-btn" src={Delete} alt="delete" />
          <span className="todo__item-btn-mobail-text">Удалить</span>
        </div>

        <div
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          <img className="todo__item-btn" src={Pencil} alt="pencil" />
          <span className="todo__item-btn-mobail-text">Редактировать</span>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
