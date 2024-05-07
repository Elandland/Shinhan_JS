import axios from 'axios'
import * as cheerio from 'cheerio';

axios.get('https://quotes.toscrape.com/').then(resp=>{
    return resp.data;
}).then(data=>{
    const $ = cheerio.load(data);

    const quotetag = $('.quote .text');                //ptag를 순회하면서 값을 출력
    // const quotetag = $('.quote');
    // const quotetag_content =  $(quototag[0]).find('.text').text()            //이렇게 해도 됨.
    const author = $('.author');
    const tag =$('.tags').children('a');

    const quotes = [];
    const authors = [];
    const tags = [];

    for (let i=0; i<quotetag.length; i++){
        quotes.push($(quotetag[i]).text());
        authors.push($(author[i]).text()); 
    }

    for (let j=0; j<tag.length; j++){
        tags.push($(tag[j]).text()); 
    }

    console.log(quotes);
    console.log(authors);
    console.log(tags);

})