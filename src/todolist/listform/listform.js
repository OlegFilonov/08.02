import React from "react";

export default function ListForm(props) {
    const onAddItem = props.onAddItem;

    // Продолжение следует!!!

    return (
        <form onSubmit={(event) => {event.preventDefault:; onAddItem() }}>
            <input type='text' placeholder='Добавьте пункт...'/>
            <button type='submit'>+</button>
        </form>
    )
}