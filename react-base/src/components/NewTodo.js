import React, { useState } from 'react';

import "../Todo/NewTodo.css";

export default function Todo() {
    const [text, setText] = useState("");
    const [arr, setArr] = useState([])
    const addArr = () => {
        setArr((arr) => [...arr, { text: text, color: boxcolor }]);
    }

    const [boxcolor, setBoxColor] = useState('white');

    return (
        <div>
            <div className='title'>Todo App</div>
            <div className='header'>
                <div className='insert_div'>
                    <input type="text" style={{ backgroundColor: boxcolor }} onChange={e => {
                        setText(e.target.value)
                    }} placeholder='입력' />
                    <button className="insert_button" onClick={() => { addArr(); }}>입력</button>
                </div>

                <div>
                    <button className="sel_col" onClick={() => { setBoxColor('antiquewhite'); }} style={{ backgroundColor: 'antiquewhite' }} ></button>
                    <button className="sel_col" onClick={() => { setBoxColor('blue'); }} style={{ backgroundColor: 'blue' }}></button>
                    <button className="sel_col" onClick={() => { setBoxColor('red'); }} style={{ backgroundColor: 'red' }}></button>
                    <button className="sel_col" onClick={() => { setBoxColor('white'); }} style={{ backgroundColor: 'white' }}></button>
                </div>
            </div>
            <h3>Todo Items</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 30, alignItems: 'center' }}>
                {arr.map((elem, idx) => <div key={idx} style={{ backgroundColor: elem.color, width: 600, height: 30, margin: 10 }}>{elem.text}</div>)}
            </div>
        </div>
    )
}