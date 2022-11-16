import * as React from 'react';
import { useState } from 'react';
import './style.css';
import ToDo from './todo/ToDo';

export default function App() {
  const [todos, setTodos] = useState(['Lau nha ne']);
  const onEnterText = (event) => {
    if (event.key === 'Enter') {
      setTodos([...todos, event.target.value]);
    }
  };

  const todoList = todos.map((todo) => <ToDo content={todo} />);
  return (
    <div>
      <h3 className="header">Danh sach</h3>
      <div>{todoList}</div>
      <input onKeyDown={onEnterText} />
    </div>
  );
}
