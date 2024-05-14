import React, { useEffect, useState } from 'react'

export default function BlinkCompnent({ text }) {
    const [showText, setShowText] = useState(true);         //useState훅은 리턴값이 배열, 0번 인덱스는 state의 자체 값 두번째 값은 state값을 바꿀 수 있는 함수로 줌
    //const X = useState(초기값)
    //X[0] : State 자체, X[1] : state를 변경할 수 있는 함수

    //state관리가 react component관리의 핵심이다!

    useEffect(() => {
        const timeoutId = setInterval(() => {
            setShowText(showText => {return !showText});
        }, 1000)
        return () => { clearInterval(timeoutId) }       //이거안하면 interveal이 해제가 안되서 계속 쌓임? 그래서 clear를 해주는듯?
    }, [])
    return (
        <div>
            {showText ? text : null}
        </div>
    )
}
