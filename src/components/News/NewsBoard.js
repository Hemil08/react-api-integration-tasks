import React from 'react'
import { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import { newsApiKey } from '../../env'


const NewsBoard = ({category}) => {

  const [articles,setArticles] = useState([])

  useEffect(()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsApiKey}`;

    fetch(url).then(
      response=> response.json()
    ).then(data=>setArticles(data.articles))
    .catch(error => console.error("Error:", error));
  },[category])

  return (
    <div className='mt-2'>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        <div className='text-center'>
        {articles.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
        </div>
    </div>
  )
}

export default NewsBoard