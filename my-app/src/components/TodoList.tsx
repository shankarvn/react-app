import React from 'react';
import { Card } from 'react-bootstrap';
import { ToDo, ToDos } from '../model/state';
import { Todo } from './Todo';


export const TodoList: React.FC<ToDos> = ({items, markTodo, removeTodo}) => {
    return (<div>    
        {items.map((todo: ToDo, index: number) => (
            <Card>
                <Card.Body>
                    <Todo
                        index={index}
                        item={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                    />
                </Card.Body>
            </Card>
        ))}
    </div>);
}