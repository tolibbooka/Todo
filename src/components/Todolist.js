import React from 'react';
import { RiCloseCircleLine } from "react-icons/ri"


export function Todolist(props) {
    const { todo, removeTodo, } = props

    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: 'orange' } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)} />
            </div>
        </div>
    );
}
