import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [todoInput, updateInput] = useState("");
  let [todoList, updateList] = useState([
    {
      id: 1,
      task: "learn react",
    },
  ]);

 

  function addNewItem() {
    if (todoInput === "") {
      alert("Add some text");
    } else {
      let newTodos = [
        ...todoList,
        {
          id: uuidv4(), // Use uuid to generate unique IDs
          task: todoInput,
        },
      ];
      updateList(newTodos);
      updateInput("");
    }
  }

  function deleteTodo(id) {
    updateList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="container  w-50">
      <h1 className="text-center mb-5 text-warning head">Todo List In React</h1>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addNewItem();
            }
          }}
          onChange={(e) => {
            let task = e.target.value;
            updateInput(task);
          }}
          value={todoInput}
        />
        <button onClick={() => addNewItem()} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group mt-5">
        {todoList.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <p>{todo.task}</p>
            <button
              className="btn"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

