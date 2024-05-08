import axios from 'axios'
import * as cheerio from 'cheerio';

axios.get('https://search.daum.net/search?nil_suggest=btn&w=news&DA=SBC&cluster=y&q=%EA%B8%88%EC%9C%B5+%EC%84%9C%EB%B9%84%EC%8A%A4').then(resp => {
    return resp.data;
}).then(data => {
    const $ = cheerio.load(data);          //해당 url의 data전체 추출


    const title = $('.item-title').find('a');
    const newsPub = $('.c-tit-doc').find('.tit_item');
    const content = $('.item-contents').find('a');
    const date = $('.gem-subinfo');
    const img_url = $('.c-item-content').find('img');


    console.log(img_url);
    const titles = [];
    const newsPubs = [];
    const contents = [];
    const dates = [];
    const urls = [];
    const img_urls = [];


    for (let i = 0; i < title.length; i++) {
        titles.push($(title[i]).text());
        urls.push($(title[i]).prop('href'));
        newsPubs.push($(newsPub[i]).text());
        contents.push($(content[i]).text());
        dates.push($(date[i]).text());
        img_urls.push($(img_url[i]).prop('data-original-src'));         //이걸 읽어서 img - src로 바꿔주는구나, img자체가 사용자에겐 중요하지않으므로
        //컨텐츠를 렌더링 해서 미리 다운받고 그 후 자바스크립트가 이미지를 다운받아(뒤늦게 img를 렌더링. lazy하게) 사용자에게 보여줘서 소통시킴. (렌더링 먼저)
    
    }

    console.log(titles);
    console.log(newsPubs);
    console.log(contents);
    console.log(dates);
    console.log(urls);
    console.log(img_urls)

})

//제목,신문사,요약설명,날짜,url,imgurl