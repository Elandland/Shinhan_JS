import React, { useCallback, useEffect,useState} from 'react'

export default function CountComponent2(){
    const[count,setCount] = useState(0);

    const addCount = useCallback((count)=>{
        setCount(count);
    },[setCount])           //디펜던시 바뀌면 callback함수를 반환하겠다.

    return(
        <div>
            <div>{count}</div>
            <button onClick={(e)=>{
                addCount(count+1);
            }}>1 증가</button>
        </div>
    )

}
