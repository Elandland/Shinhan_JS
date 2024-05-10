import React, {useState} from 'react';

const colors = ["antiquewhit", "white", "blue", "red"]

export default function TodoApp(){
    const [todoList, setTodoList] = useState([{
        text: 'todo1',
        color: 'red'
    }]);
    const [activeColor, setActiveColor] = useState(colors[0]);

    
    return (
        <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexDirection:"column"}}>
            
            <h1>Todo App</h1>
            <div>
                <input 
                    type="text" 
                    style={{backgroundColor: activeColor}} 
                />
                <button >입력</button>
            </div>
            <div style={{display:'flex', flexDirection: 'row'}}>
                {colors.map(color=>(
                    <div onClick={()=>{setActiveColor(color)}} style={
                        {backgroundColor:color, width:10,height:10, borderRadius:10}
                    }></div>
                ))}
            </div>
            <div>
                <h3>Todo List</h3>
                <ul>
                    {todoList.map(todo=>{
                        return <li style={{backgroundColor: todo.color}}>{todo.text}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}







