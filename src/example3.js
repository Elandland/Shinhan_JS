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
    const data = resp.data;
    const $ = cheerio.load(data);
    const newsList = $('.c-item-content');
    const newsParsed = [];
    // const newsListUrl = $('.c-item-content .item-title a').prop('href');
    for (let i = 0; i < newsList.length; i++) {
        const newsData = await parseNews($(newsList[i]));
        newsParsed.push(newsData);
    }
    
    console.log(newsParsed);
}
async function parseNews(news){
    const newsUrl = news.find('.item-title a').prop('href');   
    const resp = await axios.get(`${newsUrl}`)
    const data = resp.data;
    return {
        data
    }
}
scrapeNewsSearchPage("금융 서비스", 1);