import React from 'react';
import { useState } from 'react';

export function TodolistForm(props) {
    const [input,setInput]= useState('');
    const [harakat, setHarakat] = useState('')
    const [stil, setStil] = useState({});


    const tutish = (e) => {
        setHarakat(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();

        let stil = {};
        if (harakat === '') {
            stil = {
                border: "2px solid red",
            };
    }
        else {
        stil = {
            border: "3px solid green",
        };
    }
    setStil(stil);
}
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.addTodo(input)
        setInput('')
    }

    return (
        <form onSubmit={submit} onSubmit={handleSubmit} className='todo-form'>
            <input 
            value ={input}
            onChange={(e) => setInput (e.target.value)}
            className='todo-input'
            placeholder='Add a Todo'
            />
            <button type='submit' className='todo-button'style={stil} onChange={tutish}>Add Todo</button>
        </form>
     
    );
}
