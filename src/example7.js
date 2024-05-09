import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapeNaverNews(keyword,start){
    const resp = await axios.get('https://s.search.naver.com/p/newssearch/search.naver', {
        params: {
            cluster_rank : 99,
            where: 'news',
            query: keyword,
            start : start,
            _callback: 'jQuery11240716597817555098_1715211090119',
            _:'1715213644497'
        }
    });

    const data = await resp.data;
    const $ = cheerio.load(data);



    const newsList = $('.group_news');
    const title = newsList.find('a.news_tit').text();


    console.log(title);


}


//제목, 신문사, 요약설명, 이미지<존재시>    
    scrapeNaverNews('이차전지',1);

