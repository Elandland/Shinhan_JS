import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapeNewsSearchPage(query, page){
    // const url = `https://search.daum.net/search?w=news&cluster=y&q=${query}&p=${page}`;
    const resp = await axios.get('https://search.daum.net/search', {
        params: {
            w: 'news',
            cluster: 'y',
            q: query,
            p: page
        }
    });
    const data = await resp.data;
    const $ = cheerio.load(data);
    const newsList = $('ul.c-list-basic > li');
    const newsParsed = newsList.map((i,el)=>{
        return parseNews($(el));
    }).get();
    return newsParsed;
}   
function parseNews(newsElem){
    const press = newsElem.find('.c-tit-doc .tit_item').prop('title');
    const titleAnchor = newsElem.find('.c-item-content .item-title a');
    const title = titleAnchor.text();
    const url = titleAnchor.prop('href');
    const desc = newsElem.find('.c-item-content .conts-desc').text();

    const imgSrc = newsElem.find('.c-item-content img').prop('data-original-src');
    return {
        press, title, url, desc, imgSrc
    }
}
import fs from 'fs';


async function main(){
    const keyword = "금융 서비스"
    const newsArray = await scrapeNewsSearchPage(keyword, 1);
    
    for (let i=0; i<newsArray.length; i++){
        const resp = await axios.get(newsArray[i].url);
        newsArray[i]['html'] = await resp.data;
    }
    console.log(newsArray);
    const result = JSON.stringify(newsArray);
    fs.writeFile(`daum-${keyword}.json`, result)
}
main();