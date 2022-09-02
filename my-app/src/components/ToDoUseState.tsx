import { useState } from "react";
import { ToDo } from "../model/state";
import { TodoList } from "./TodoList";

export const ToDoUseState: React.FC<any> = (...props) => {
    const [todos, setTodos]: [ToDo[], any] = useState([
        {
            text: "This is a sampe todo",
            isDone: false
        },
        {
            text: "This is a sampe todo 2",
            isDone: false
        },
        {
            text: "This is a sampe todo 3",
            isDone: false
        },
        {
            text: "This is a sampe todo 4",
            isDone: true
        },
    ]);
    
    const markTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };
    
    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <TodoList items = { todos } markTodo = { markTodo } removeTodo = { removeTodo }/>
    );
}