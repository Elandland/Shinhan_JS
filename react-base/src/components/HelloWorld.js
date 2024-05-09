import React from 'react'
//import "./HelloWorld.css"
import Style from "./HelloWorld.module.css";

export default function HelloWorld(){
    return (
        //css 속성의 key ==> js object의 key(camelCase로 작성해라)
        // <div style={{textAlign:'center',color:'red'}}>
        <div className={Style.HelloWorld}>
            <h1>Hello, World!</h1>
            <p>This is My first React Application</p>
        </div>
    )
}