import axios from 'axios';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';

async function fetchStockGongsi(code='005930', page=1){
    const url = 'https://finance.naver.com/item/news_notice.naver';
    const resp = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        },
        responseType: 'arraybuffer',
        responseEncoding: 'binary',
        params: {
            code: code,
            page: page
        },
    });
    const data = iconv.decode(resp.data, 'euc-kr');
    
    const $ = cheerio.load(data);
    const result = $('tbody tr').map((i, elem)=>{
        const tdTags = $(elem).find('td');
        return {
            title: $(tdTags[0]).text(),
            info: $(tdTags[1]).text(),
            date:$(tdTags[2]).text().trim(),
        }
    }).get();
    result.pop()
    console.log(result);
    return result;
    
}

fetchStockGongsi()