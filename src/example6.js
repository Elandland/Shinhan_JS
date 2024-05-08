//wadiz는 was로 웹 어플리케이션 서버라 동적으로 처리해서 직접 api상에서 post를 날려야 받을 수 있음

import axios from 'axios';

async function wadizData() {
    const url = 'https://service.wadiz.kr/api/search/funding';
    const payload = {
        'startNum': 0,
        'order': 'recommend',
        'limit': 48,
        'categoryCode': '',
        'endYn': ''
    };
    
    const response = await axios.post(url, payload);
    const data = response.data


    for (let i = 0; i < data.data.list.length; i++) {
        const obj = data.data.list[i];
        console.log(`Object ${i + 1}:`, obj);
      }

    
    console.log();
    
}

wadizData();
