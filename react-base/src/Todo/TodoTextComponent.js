import React, { useState } from 'react';
import TodoColorComonent from './TodoColorComponent'; // Color 컴포넌트 불러오기

import "./NewTodo.css";

export default function TodoInput({ idx, onAdd, onColorChange, items }) {
    const [text, setText] = useState("");
    const [boxColor, setBoxColor] = useState('white'); // 입력 창의 기본 배경색은 흰색



    const handleAdd = () => {
        onAdd(text);
        setText("");
    };

    const handleColorChange = (color) => {
        setBoxColor(color);
        onColorChange(color); // 컬러가 변경될 때 호출되도록
    };




    return (
        <div className='header'>
            <div className='insert_div'>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder='입력'
                    style={{ backgroundColor: boxColor }} // 배경색 적용
                />
                <button className="insert_button" onClick={handleAdd}>입력</button>
            </div>


            {/* Colorbar 컴포넌트 사용 */}
            <TodoColorComonent onColorChange={handleColorChange} />

        </div>
    );
}

