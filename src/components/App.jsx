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
  
  return (
    <>
      <h1>TODO進捗管理だよ</h1>
      <textarea />
      <button>+ TODOを追加します</button>

      <h2>TODOリストだよ</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? "完了" : "未完了"})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
