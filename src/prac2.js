import axios from 'axios';                //<-얘는 type이 module(package.json에서)
//const axios = require('axios');          // <-얘는 type이 requirement
import * as cheerio from 'cheerio';

axios.get('https://example.com').then(resp=>{
    return resp.data;
}).then(data=>{
    //console.log(data);          //해당 url의 data전체 추출
    const $ = cheerio.load(data);
    const header = $('h1');     //해당 url에서 h1헤더 찾아서 추출
    console.log(header.text());

    const pTags = $('div').children('p');               //해당 url에서 div 밑의 p 태그만 찾아서 추출
    console.log(pTags.text());

    const url = $('a').prop('href');         //a태그를 찾아서 property를 herf로 추출하겠다.
    console.log(url);

    //map - for 방식
    const ptag = $('p');                //ptag를 순회하면서 값을 출력
    const values = ptag.map((i,elem)=>{
        return $(elem).text();
    });


    const data2 = [];
    for (let i=0; i<ptag.length; i++){
        data2.push($(ptag[i]).text());
    }
    console.log(data2);

})