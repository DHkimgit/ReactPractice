import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //async를 사용하는 함수 따로 선언
        const fetchdata = async () => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&topic=${category}`
                const response = await axios.get(`https://gnews.io/api/v4/search?q=example&token=00b655323b7276be4c1a4ccf6bd2905c&lang=en&topic=sports`,);
                setArticles(response.data.articles);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchdata();
    }, [category]);

    if (loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    } 
    if (!articles) {
        return null;
    }
      return (
        <NewsListBlock>
          {articles.map(article => (
            <NewsItem key={article.url} article={article} />
          ))}
        </NewsListBlock>
      );
};

export default NewsList;