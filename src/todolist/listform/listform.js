import React from "react";

export default function ListForm(props) {
    const onAddItem = props.onAddItem;
    const currentInput = props.currentInput;
    const onUpdateInput = props.onUpdateInput;

    return (
        <form onSubmit={onSubmit}>
            <input type='text'
                   placeholder='Добавьте пункт...'
                   value={currentInput}
                        onChange={(event) => {onUpdateInput(event.target.value)}}/>
            <button type='submit'>+</button>
        </form>
    );

    function onSubmit(event) {
        event.preventDefault();
// Валидация "input" != '' или пробелам
        if (currentInput && currentInput.trim())
        onAddItem()
    }
}