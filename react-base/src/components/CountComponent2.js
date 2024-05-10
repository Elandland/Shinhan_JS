import React, { useCallback, useEffect,useState} from 'react'

export default function CountComponent2(){
    const[count,setCount] = useState(0);

    const addCount = useCallback((count)=>{
        setCount(count);
    },[setCount])

    return(
        <div>
            <div>{count}</div>
            <button onClick={(e)=>{
                addCount(count+1);
            }}>1 증가</button>
        </div>
    )

}
