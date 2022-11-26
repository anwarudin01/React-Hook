import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getNewslist, searchNews } from './api';
import { useEffect, useState } from 'react';

const App = () => {
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    getNewslist().then((result) => {
      setPopularNews(result);
    });
  }, []);

  const PopularNewsList = () => {
    return popularNews.map((news, i) => {
      return (
        <div className="col-3" key={i}>
          {/* <img className="news-image" src={news.urlToImage} />
          <div className="news-title">{news.title}</div>
          <div className="news-date">{news.publishedAt}</div>
          <div className="description">{news.description}</div>
          <button className="button"></button> */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={news.urlToImage} />
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>{news.description}</Card.Text>
              <Button variant="primary">Lihat</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchNews(q);
      setPopularNews(query);
      console.log({ query: query });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Anwar News</h1>
          <input placeholder="cari berita..." className="news-search" onChange={({ target }) => search(target.value)} />

          <PopularNewsList />
        </div>
      </div>
    </div>
  );
};

export default App;
