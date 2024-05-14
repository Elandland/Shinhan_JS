import React from 'react';
import TodoItemComponent from './TodoItemComponent';



export default function TodoList({ items, onDelete, onEdit }) {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 30, alignItems: 'center' }}>
            {items.map((elem, idx) => (
                <TodoItemComponent key={elem.id} idx={idx} text={elem.text} color={elem.color} deleteArr={onDelete} editArr={onEdit} />
            ))}
        </div>
    );
}
