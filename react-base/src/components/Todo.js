import React, { useState } from 'react';

function InputFieldWithColorPicker() {
    const [inputValue, setInputValue] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('white'); // 입력 창의 기본 배경색은 흰색
    const [items, setItems] = useState([]); // 입력된 아이템을 저장하는 배열

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleColorChange = (color) => {
        setBackgroundColor(color);
    };

    const addItem = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue !== '') {
            setItems(prevItems => [...prevItems, { color: backgroundColor, value: trimmedValue }]);
            setInputValue(''); // 입력값 초기화
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
            <p style={{ margin: '10px 0' }}>Todo App</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
            
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="입력"
                    style={{ backgroundColor: backgroundColor, marginRight: '10px', padding: '5px', borderRadius: '5px', width: '100%', height: '40px', textAlign:'center' }} // 입력 창의 배경색을 상태에 따라 동적으로 설정
                />
                <button onClick={addItem} style={{ width: '60px',height: '40px' }}>입력</button>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <span style={{ marginRight: '10px', cursor: 'pointer', display: 'inline-block', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'red' }} onClick={() => handleColorChange('red')}></span>
                <span style={{ marginRight: '10px', cursor: 'pointer', display: 'inline-block', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'green' }} onClick={() => handleColorChange('green')}></span>
                <span style={{ marginRight: '10px', cursor: 'pointer', display: 'inline-block', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'blue' }} onClick={() => handleColorChange('blue')}></span>
                {/* 다른 색상을 추가할 수 있습니다 */}
            </div>
            <p style={{ margin: '10px 0' }}>Todo Items</p>
            <ul style={{ padding: 0, width: '100%' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ listStyleType: 'none', marginBottom: '5px', display: 'flex', alignItems: 'center', width: '100%' }}>
                        <div
                            style={{
                                backgroundColor: item.color,
                                width: '100%',
                                padding: '10px',
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: '10px',
                                borderRadius: '5px'
                            }}
                        >
                            {item.value}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InputFieldWithColorPicker;
