import React, { useState } from "react";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import Draggable, { DraggableCore } from "react-draggable";
import { IoTrashBinSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { AiFillUpCircle } from "react-icons/ai";
import { AiFillDownCircle } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
function App() {
  const Draggable = require("react-draggable");
  const DraggableCore = Draggable.DraggableCore;
  const [list, setlist] = useState([]);
  const [input, setinput] = useState("");

  const addTodo = (todo, time) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      time: "add at " + time,
    };
    setlist([...list, newTodo]);
    setinput("");
    console.log(new Date().toLocaleString() + "");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id != id);
    setlist(newList);
  };

  const clearTodo = () => {
    setlist([]);
  };
  return (
    <div>
      <h1>
        <h2>Todo list</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />

        {/* <button
          type="button"
          class="btn btn-primary"
          onClick={() => addTodo(input, new Date().toLocaleString() + "")}
        >
          Add
        </button> */}
        <CiCirclePlus
          onClick={() => addTodo(input, new Date().toLocaleString() + "")}
        ></CiCirclePlus>
        <IoTrashBinSharp onClick={() => clearTodo()}></IoTrashBinSharp>
        {/* <button
          type="button"
          class="btn btn-danger"
          onClick={() => clearTodo()}
        >
          Clear
        </button> */}
        <div class="card" style={{ width: "18rem" }}>
          <ul class="list-group list-group-numbered">
            {list.map((todo) => (
              <li class="list-group-item" key={todo.id}>
                {todo.todo}
                <div style={{ fontSize: "10%", width: "18rem" }}>
                  {todo.time}
                </div>
                {/* <button
                  type="button"
                  class="btn btn-outline-success btn-lg "
                  onClick={() => deleteTodo(todo.id)}
                >
                  &times;
                </button> */}
                <FiCheckCircle
                  onClick={() => deleteTodo(todo.id)}
                ></FiCheckCircle>
                <AiFillUpCircle></AiFillUpCircle>
                <AiFillDownCircle></AiFillDownCircle>
              </li>
            ))}
          </ul>
        </div>
      </h1>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("example"));
