import React, {useState} from 'react'

import "./NewTodo.css";


export default function Colorbar({ onColorChange }) {
    const handleColorChange = (color) => {
        onColorChange(color);
    };

    return (
        <div>
            <button className="sel_col" onClick={() => handleColorChange('antiquewhite')} style={{ backgroundColor: 'antiquewhite' }}></button>
            <button className="sel_col" onClick={() => handleColorChange('blue')} style={{ backgroundColor: 'blue' }}></button>
            <button className="sel_col" onClick={() => handleColorChange('red')} style={{ backgroundColor: 'red' }}></button>
            <button className="sel_col" onClick={() => handleColorChange('white')} style={{ backgroundColor: 'white' }}></button>
        </div>
    );
}
