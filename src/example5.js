import axios from 'axios';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';


async function offcialNotice(){
    
    const url = `https://finance.naver.com/item/news.nhn?code=005930`;
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
        if(iframe_title==='공시 리스트영역')
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

    const article_first = $2('tbody.first');
    const article_last = $2('tbody.last');

    const article_first_line = article_first.find('tr');
    const article_last_line = article_last.find('tr');

    const article_firstParsed = article_first_line.map((i,el)=>{
        return article_value($(el));
    }).get();

    const article_lastParsed = article_last_line.map((j,el2)=>{
        return article_value($(el2));
    }).get();


    console.log(article_firstParsed);
    console.log(article_lastParsed);
}

function article_value(element){
    const title=element.find('td.title').text();
    const info = element.find('td.info').text();
    const date = element.find('td.date').text();

    return{
        title,info,date
    }
}



offcialNotice();
