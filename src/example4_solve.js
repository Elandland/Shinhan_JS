import axios from 'axios';
import * as cheerio from 'cheerio';

import fs from 'fs';


async function fetchStockData(stockCode){
    const url = 'https://finance.naver.com/item/sise_day.naver'
    const resp = await axios.get(url, {
        params: {
            'code':`${stockCode}`
        },
        headers:{
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }
    })
    const data = await resp.data;
    console.log(resp.config)
    fs.writeFile('./sample.html', data, ()=>{});

    const $ = cheerio.load(data);
    const trTags = $('tr[onmouseover]');
    const result = trTags.map((i, elem)=>{
        const tdTags = $(elem).find('td>span');
        return {
            date: $(tdTags[0]).text(),
            close: $(tdTags[1]).text(),
            ratio:$(tdTags[2]).text().trim(),
            open:$(tdTags[3]).text().trim() ,
            high:$(tdTags[4]).text(),
            low:$(tdTags[5]).text(),
            volume: $(tdTags[6]).text(),
        }
    }).get();
    console.log(result);
}


fetchStockData('005930');