import axios from "axios";
import * as cheerio from "cheerio";
const baseUrl =
  "https://m.search.naver.com/search.naver?ssc=tab.m_news.all&where=m_news&sm=mtb_jum";
async function main(query, page) {
  const url = baseUrl + `&query=${query}`;
  const resp = await axios.get(url);
  const html = resp.data;
  const $ = cheerio.load(html);
  let startNum = 0;
  while (startNum < 15 * page) {
    const newsList = await infiniteScroll(startNum, query);
    const news = newsList
      .map((i, el) => {
        return newsParsed($(el));
      })
      .get();
    startNum += 15;
    console.log(news);
  }
}
async function infiniteScroll(startNum, query) {
  const params = {
    start: `${startNum}`,
    query: `${query}`,
    where: "news",
  };
  const response = await axios.get(
    "https://s.search.naver.com/p/newssearch/search.naver",
    { params: params }
  );
  // 응답에서 데이터 추출
  const data = response.data;
  // 추출한 데이터를 처리하거나 반환합니다.
  const $ = cheerio.load(data);
  const newsList = $("div.news_wrap");
  return newsList;
}
function newsParsed(elem) {
  const media = elem.find("div.info_group .info.press").text();
  const uploadTime = elem.find("div.info_group span.info").eq(0).text();
  const title = elem.find("a.news_tit").prop("title");
  const description = elem
    .find("div.news_dsc div.dsc_wrap a.dsc_txt_wrap.api_txt_lines")
    .text();
  return {
    media,
    uploadTime,
    title,
    description,
  };
}
main("이차전지", 7);