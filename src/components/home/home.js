import React from 'react';
import TodoList from "../todolist/todolist";

export default function Home () {
    const items = [
        "Проснуться",
        "Умыться",
        "Побриться",
    ];

    return (
        <main>
            <h1>Hello world</h1>
            <h2>This is a home page</h2>
            <h1>To Do:</h1>
            <TodoList items={items} id='home-todo'/>

            <h1>To Do 2:</h1>
            <TodoList items={items} id='home-todo-2'/>
        </main>
    )
}