import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";


export default function TodoItem({ idx, text, color, deleteArr, editArr }) {
    const [disabled, setDisabled] = useState(true)
    const [newtext, setNewText] = useState(text);
    return (
        <div className="todo-item" style={{ backgroundColor: color, width: 600, height: 30, margin: 10 }}>
            <input
                type="text"
                value={newtext}
                onChange={(e) => { setNewText(e.target.value) }}
                placeholder='수정해주세요'
                style={{ background: "none", border: "none", width: 580, display: 'flex' }}
                disabled={disabled}

            />
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <button className="edit" onClick={() => {
                    if (disabled !== true) {
                        console.log("하이");
                        editArr(idx, newtext);
                    }
                    setDisabled((pre) => !pre)

                }}><FontAwesomeIcon icon={faPenToSquare} color="white" /></button>
                <button className="delete" onClick={() => {
                    deleteArr(idx)
                }
                }><FontAwesomeIcon icon={faTrashCan} color="white" /></button>

            </div>
        </div>
    );
}
