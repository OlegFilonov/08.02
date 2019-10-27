import React from "react";

export default function ListView(props) {
    const items = props.items;
    return (
        <ul>
            {items.map(item =>{
                return (
                    <li>
                        <span className='item-text'>{item}</span>
                        <button>x</button>
                    </li>)
            })}

        </ul>
    )
}