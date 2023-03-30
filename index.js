import React, { useState } from "react";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import Draggable, { DraggableCore } from "react-draggable";

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
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => addTodo(input, new Date().toLocaleString() + "")}
        >
          add
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => clearTodo()}
        >
          clear
        </button>

        <ul class="list-group list-group-numbered">
          {list.map((todo) => (
            <Draggable>
              <li class="list-group-item" key={todo.id}>
                {todo.todo}
                <div style={{ fontSize: "10%" }}>{todo.time}</div>

                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => deleteTodo(todo.id)}
                >
                  &times;
                </button>
              </li>
            </Draggable>
          ))}
        </ul>
      </h1>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("example"));
