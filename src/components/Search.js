import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const Search = ({ apiKey, setProgress }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            setProgress(10);
            const query = new URLSearchParams(location.search).get('query');
            const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=10`;
            setLoading(true);
            let data = await fetch(url);
            setProgress(30);
            let parsedData = await data.json();
            setProgress(70);
            setArticles(parsedData.articles);
            setLoading(false);
            setProgress(100);
        };

        fetchData();
    }, [location.search, apiKey, setProgress]);

    return (
        
        <div className="container my-3">
            <h2 className="mb-4 text-center"  style={{ margin: "60px 0px 0px" }}>Showing Search Results</h2>
            {loading && <Spinner />}
            <div className="row">
                {articles.map((article, index) => (
                    <div className="col-md-4 d-flex align-items-stretch" key={index}>
                        <NewsItem
                            title={article.title}
                            description={article.description}
                            imageUrl={article.urlToImage}
                            newsUrl={article.url}
                            author={article.author}
                            date={article.publishedAt}
                            source={article.source.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
