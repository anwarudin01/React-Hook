import axios from 'axios';

const url = 'https://newsapi.org/v2/top-headlines?country=id';
const key = '028c1940a72442bebade3e0b1d0dd0c9';

export const getNewslist = async () => {
  const news = await axios.get(`${url}&apiKey=${key}`);
  return news.data.articles;
};

export const searchNews = async (q) => {
  const search = await axios.get(`https://newsapi.org/v2/everything?q=${q}&ortBy=popularity&apiKey=${key}`);
  return search.data.articles;
};
