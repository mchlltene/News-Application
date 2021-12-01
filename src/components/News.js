import React, { useState, useEffect } from 'react';
import NewsContent from './NewsContent';

const News = () => {
  const [news, setNews] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    // hit NewsAPI Discover get news endpoint to get the recent news
    fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=80fe0ede6032455799b98b46d8d5e2f2')
    .then(response => response.json())
    .then(data => setNews(data.articles));

    // eslint-disable-next-line
  }, []);

  const  handleSubmit = (e) => {
    e.preventDefault();

    // hit NewsAPI Rest API endpoint to search for some news
    fetch(`https://newsapi.org/v2/everything?from=2021-11-27&sortBy=popularity&qInTitle=${text}&apiKey=80fe0ede6032455799b98b46d8d5e2f2`)
    .then(response => response.json())
    .then(data => setNews(data.articles));
    setText('');
  }
  console.log(news);

  const handleChange = (e) => {setText(e.target.value)};

  return(
    <section>
      <div className=" container  px-4 px-lg-5 mt-3">
        <div class="search-bg"> 
        <h2 className="text-white ps-1">📰Search News</h2>
          <form onSubmit={handleSubmit}>
            <input placeholder="🔎 Search here and press enter..." type="text" className="form-control" onChange={handleChange} value={text} />
          </form>
        </div>
        <h3 className="text-dark text-decoration-underline  mt-4 mb-1">News Headlines</h3>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
          { news.map(news => <NewsContent news={news} />) }       
          </div>
      </div>
  </section>
  );
}

export default News;
