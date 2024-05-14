import React, { useEffect, useState } from 'react';
import TodoTextComponent from './TodoTextComponent';
import TodoListComponent from './TodoListComponent';
import TodoSearch from './TodoSearchComponent';

import { TodoStore } from '../lib/util';
import { Collapse } from 'bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const [arr, setArr] = useState(TodoStore.getTodo()); // 초기 데이터를 localStorage에서 가져옴
    const [boxcolor, setBoxColor] = useState('white');
    const [filteredArr, setFilteredArr] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        if (!arr) return;

        if (searchInput) {
            setFilteredArr(arr.filter(todo => todo.text.includes(searchInput)))
        }
        else {
            setFilteredArr([...arr]);
        }
    }, [searchInput, arr])
    const addArr = (text) => {
        const newTodo = { id: uuidv4(), text: text, color: boxcolor };
        const updatedTodos = [...arr, newTodo];
        setArr(updatedTodos); // 새로운 Todo를 추가한 후 상태를 업데이트
        TodoStore.setTodo(updatedTodos); // 업데이트된 Todo를 localStorage에 저장
    };

    const handleColorChange = (color) => {
        setBoxColor(color);
    };


    const deleteArr = (index) => {
        const updatedTodos = arr.filter((_, i) => i !== index);
        setArr(updatedTodos); // 삭제된 Todo를 제외한 나머지 Todo 목록으로 상태를 업데이트
        TodoStore.setTodo(updatedTodos); // 업데이트된 Todo를 localStorage에 저장
    };

    const editArr = (index, newtext) => {
        const editTodos = arr.map((_, i) => {
            if (i === index) {
                return {
                    ..._,
                    text: newtext
                }
            }
            return (_)
        })
        // let edit = arr.filter((_, i) => i === index);
        // edit.text = newtext;
        // setArr(edit);
        setArr(editTodos);
        TodoStore.setTodo(editTodos);

    };

    return (
        <div>
            <div className='title'>Todo App</div>
            <TodoTextComponent onAdd={addArr} onColorChange={handleColorChange} />
            <TodoSearch setSearchInput={setSearchInput} />
            <h3>Todo Items</h3>
            <TodoListComponent items={filteredArr} onDelete={deleteArr} onEdit={editArr} />
        </div>
    );
}
