// import React, { useState } from 'react'
// export default function CountComponent() {
//     const [count, setCount] = useState(10)
//     const addCount = () => {
//         setCount(count + 1);
//     }
//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={addCount}> +1 </button>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react'
export default function CountComponent() {

    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("데이터 받아오기! (이 함수는 한번만 실행됩니다.");
        return () => {
            console.log("메모리를 잡아 먹으면 리소스 해제하는 함수를 return해주어야 합니다.")
        }
    },[])
    //strict 모드 쓰면 한번 더씀
    //2번째인자[] 에 있는 값이 바뀌면 첫번째에 있는 해당함수를 다시 실행시키겠다. 근데 2번째 인자가 빈 값이니까 마운트 될때 한번 호출됨. (언마운트 될때까지 호출x)

    useEffect(() => {
        console.log(`카운트가 증가할때마다 실행! \n -count: ${count}`);
 }, [count])
 //2번째 인자인 count가 변경될때마다 함수 실행시키겠다. (console.log를 찍어주겠다.)
    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>1 증가</button>
        </div>
        )
    }

    //useEffect의 return값은 함수 인데. 얘는 다시 함수를 호출하거나 마운트가 내려갈때까지 안나옴


    
    // useEffect(()=>{
    //     const intervalId = setInterval(()=>{
    //         console.log("호출");
    //         setShowText(!showText);
    //     }, 3000);
    //     return ()=>{clearInterval(intervalId);}
    // }, []);