import React from 'react';

export default function CaptionImage(props){
    return(
        <div style={{textAlign:'center'}}>
            <img src = {props.imgUrl} alt = {props.caption}/>
            <p>{props.caption}</p>
        </div>
    )
}