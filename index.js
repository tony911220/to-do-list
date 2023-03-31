import React, { useState } from "react";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import Draggable, { DraggableCore } from "react-draggable";
import { IoTrashBinSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { AiFillUpCircle } from "react-icons/ai";
import { AiFillDownCircle } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import Example from "./info";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const Draggable = require("react-draggable");
  const DraggableCore = Draggable.DraggableCore;
  const [list, setlist] = useState([]);
  const [input, setinput] = useState("");

  const [show, setShow] = useState(false);
  const [ID, setID] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTodo = (todo, time) => {
    console.log(ID);
    const newTodo = {
      /* id: Math.random(), */

      id: ID,
      todo: todo,
      time: "add at " + time,
      check: false,
    };
    setlist([...list, newTodo]);
    setinput("");
    console.log(new Date().toLocaleString() + "");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id != id);
    setlist(newList);
  };

  const deleteInfo = () => {
    setShow(1);
    clearTodo();
  };

  const upTodo = (id) => {
    /* console.log(id);
    console.log(list[id]); */
    if (id >= 1) {
      list[id].id = id - 1;
      list[id - 1].id = id;
      const newlist = [
        ...list.slice(0, id - 1),
        list[id],
        list[id - 1],
        ...list.slice(id + 1, list.length + 1),
      ];

      setlist(newlist);
      /* const i = list.findIndex((x) => x.id === id);
      const newList = [list[i], ...list.slice(0, i - 1), ...list.slice(i + 1)];
      setlist(newList); */
    } else {
      return;
    }
  };
  const downTodo = (id) => {
    /* console.log(id);
    console.log(list[id]); */
    if (id < list.length - 1) {
      list[id].id = id + 1;
      list[id + 1].id = id;
      const newlist = [
        ...list.slice(0, id),

        list[id + 1],
        list[id],
        ...list.slice(id + 2, list.length + 1),
      ];

      setlist(newlist);
      /* const i = list.findIndex((x) => x.id === id);
      const newList = [list[i], ...list.slice(0, i - 1), ...list.slice(i + 1)];
      setlist(newList); */
    } else {
      return;
    }
  };
  const clearTodo = () => {
    setlist([]);
    handleClose();
  };

  const checkTodo = (id) => {
    const newList = [...list];
    if (list[id].check == false) newList[id].check = true;
    else newList[id].check = false;
    setlist(newList);
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
          onClick={() => {
            setID(ID + 1);
            addTodo(input, new Date().toLocaleString() + "");
          }}
        ></CiCirclePlus>
        <IoTrashBinSharp onClick={handleShow}></IoTrashBinSharp>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>do you want to clean?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={clearTodo}>
                clean
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        {/* <button
          type="button"
          class="btn btn-danger"
          onClick={() => clearTodo()}
        >
          Clear
        </button> */}
        <div class="card" style={{ width: "18rem" }}>
          <ul class="list-group list-group">
            {list.map((todo) => (
              <li
                class="list-group-item"
                key={todo.id}
                data-toggle="tooltip"
                data-placement="top"
                title={todo.time}
              >
                {/* {todo.todo} */}

                {todo.check == true ? (
                  <div
                    style={{ textDecoration: "line-through", color: "#4CAF50" }}
                  >
                    {todo.todo}
                  </div>
                ) : (
                  <div>{todo.todo}</div>
                )}

                <div style={{ fontSize: "10%", width: "18rem" }}></div>
                {/* <button
                  type="button"
                  class="btn btn-outline-success btn-lg "
                  onClick={() => deleteTodo(todo.id)}
                >
                  &times;
                </button> */}
                <FiCheckCircle
                  onClick={() => checkTodo(todo.id)}
                ></FiCheckCircle>
                <AiFillUpCircle
                  className="up"
                  onClick={() => upTodo(todo.id)}
                ></AiFillUpCircle>
                <AiFillDownCircle
                  className="down"
                  onClick={() => downTodo(todo.id)}
                ></AiFillDownCircle>
                <FaTrashAlt onClick={() => deleteTodo(todo.id)}></FaTrashAlt>
              </li>
            ))}
          </ul>
        </div>
      </h1>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("example"));
