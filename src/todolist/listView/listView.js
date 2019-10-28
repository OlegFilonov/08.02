import React from "react";

export default function ListView(props) {
    const items = props.items;
    const onDelete = props.onDelete;

    return (
        <ul>
            {items.map(item =>{
                return (
                    <li key={item}>
                        {item}
                        <button onClick={() => onDelete(item)}>x</button>
                    </li>)
            })}

        </ul>
    )
}