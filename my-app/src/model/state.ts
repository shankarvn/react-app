export interface ToDo {
    text: string;
    isDone: boolean;
}

export interface ToDoList {
    items: ToDo[];
}

export interface ToDoOperations {
    markTodo: (index: number) => void;
    removeTodo: (index: number) => void;
}

export interface ToDoIndex {
    index: number;
}

export type ToDos = ToDoList & ToDoOperations;

export type ToDoComposite = {item: ToDo} & ToDoOperations & ToDoIndex;