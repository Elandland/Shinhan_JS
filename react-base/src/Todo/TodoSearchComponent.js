import React, { useState } from 'react';

export default function TodoSearch({ setSearchInput }) {
    const [searchText, setSearchText] = useState(""); // 검색어 상태

    // 검색어 변경 핸들러
    const handleChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        setSearchInput(text); // 검색어를 상위 컴포넌트로 전달
    };

    return (
        <div className='insert_div'>
            <input
                icon='search'
                placeholder='검색할 Todo를 입력해주세요'
                value={searchText}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleChange(e); // Enter 키를 누를 때 검색 실행
                    }
                }}
            />
            <button onClick={handleChange}>검색</button> {/* 검색 버튼 */}
        </div>
    );
}
