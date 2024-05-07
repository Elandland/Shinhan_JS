import axios from 'axios';                //<-얘는 type이 module(package.json에서)
//const axios = require('axios');           //<-얘는 type이 requirement
axios({
    method: 'GET',
    url: 'https://www.naver.com',
}).then(response => {
    console.log(response);
})