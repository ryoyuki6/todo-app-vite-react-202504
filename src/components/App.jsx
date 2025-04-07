import React, { useState, useEffect } from "react"
// import { useState } from 'react'
import axios from "axios"

const todoDataUrl = "http://localhost:3100/todos";

function App() {
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  }, []);
  console.log("TODOリスト：", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });
  console.log("完了TODOリスト：", inCompletedList);

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });
  console.log("完了TODOリスト：",completedList);
  
  return (
    <>
      <h1>TODO進捗管理だよ</h1>
      <textarea />
      <button>+ TODOを追加します</button>

      <h2>TODOリストだよ</h2>
      <ul>
        {inCompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "未完了リストへ" : "完了リストへ"}
            </button>
            <button>削除！</button>
          </li>
        ))}
      </ul>

      <h2>完了TODOリストだよ</h2>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "未完了リストへ" : "完了リストへ"}
            </button>
            <button>削除！</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
