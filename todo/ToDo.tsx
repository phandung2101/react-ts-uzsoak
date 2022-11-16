import * as React from 'react';
import './todo.css';

export default function ToDo(props) {
  return (
    <div>
      <input type="checkbox" />
      <span> {props.content} </span>
    </div>
  );
}
