import React from 'react';
import { Button } from "react-bootstrap";
import { ToDoComposite } from "../model/state";

export const Todo: React.FC<ToDoComposite> = ({markTodo, removeTodo, index, item}) => {
    return (
      <div className="todo">
        <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>{item.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }