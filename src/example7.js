import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapeNaverNews(keyword){
    const resp = await axios.get('https://search.naver.com/search.naver', {
        params: {
            ssc: 'tab.news.all',
            where: 'news',
            sm: 'tab_jum',
            query: keyword
        }
    });

    const data = await resp.data;
    const $ = cheerio.load(data);

    const newsList = $('ul.list_news_infinite_list > li');
    const title = $(newsList[1]).find('a div').text()

    console.log(title);
}


//제목, 신문사, 요약설명, 이미지<존재시>    
scrapeNaverNews('이차전지');




