import axios from 'axios';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';


async function scrapeNaver(){
    
    const url = `https://finance.naver.com/item/sise.nhn?code=005930`;
    const response = await axios.get(url, {
        responseType: 'arraybuffer',
        responseEncoding: 'binary'
      });
      const data = iconv.decode(Buffer.from(response.data), 'EUC-KR');
      const $ = cheerio.load(data);

    const day_value_iframe = $('iframe');
    
    let day_value_url = ' ';
    
    

    for(let i=0; i<day_value_iframe.length; i++){
        const iframe_title = $(day_value_iframe[i]).prop('title')
        if(iframe_title==='일별 시세')
        day_value_url = $(day_value_iframe[i]).prop('src');
    }

    const finace_url = `https://finance.naver.com${day_value_url}`;

    const resp2 = await axios.get(finace_url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
        },
        responseType: 'arraybuffer',
        responseEncoding: 'binary'
    });
    const html2 = iconv.decode(Buffer.from(resp2.data), 'EUC-KR');

    const $2 = cheerio.load(html2);

    const day_value_line = $2('tr[onmouseover]');

    const day_valueParsed = day_value_line.map((i,el)=>{
        return dayvalue($(el));
    }).get();

const cleanedValues = day_valueParsed.map(item => ({
    day: item.day.replace(/\n/g, ''),
    value: item.value.replace(/\n/g, '').replace(/\t+/g, ' ')
}));

    console.log(cleanedValues);
    
}
function dayvalue(valueElem){
    const day = valueElem.find('td[align]').text()
    const value = valueElem.find('td.num').text();

    return {
        day,value
    }
}
scrapeNaver();
