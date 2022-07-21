import React, { Component } from 'react'
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import { useEffect,useState } from 'react';
const News=(props)=> {

  // capital=(string)=>
  // {
  //   string[0]=string[0].toUpperCase();
  //   return string;
  // }
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const[totalArticles,setTotalArticles]=useState(0)
  //  document.title=`${(props.category)}-NewsHub`;
      const  updateNews=async()=>
      {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data=await fetch(url);
        let parsedData=await data.json(); 
      setArticles(parsedData.articles)
      setTotalArticles(parsedData.totalResults)
      setLoading(false)
     
    }
    useEffect(()=>{
      this.updateNews();
    },[])
       const handlePrev=async()=>
        {
         setPage(page+1);
             updateNews();
        }
       const handleNext=async()=>
        {
          setPage(page-1);
          updateNews();
        }
    return (
        <div style={{backgroundColor:props.mode==='light'?'white':'grey'}}>
      <div className='container my-3'>
        <h2 className="text-center">Top Headlines</h2>
        {loading && <Spinner/>}
        <div className="row my-3">
        {loading===false && articles.map((element)=>{
           return  <div className="col-md-4" key={element.url}>
        <Newsitem  author={element.author} date={element.publishedAt}title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imgurl={element.urlToImage?element.urlToImage:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} newsurl={element.url}/>
        </div>
        
        })}
    </div>
    </div>
    <div className="container my-3 d-flex justify-content-between">
    <button disabled={page<=1}type="button" onClick={handlePrev} className="btn btn-dark"> &larr; Previous</button>
    <button disabled={Math.ceil(totalArticles/(props.pageSize))<page+1}type="button" onClick={handleNext} className="btn btn-dark">Next &rarr; </button> 
      </div>
      </div>
    )
  }
News.defaultProps={
  country:"in",
  pageSize:9,
  category:'general'
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
 category:PropTypes.string,
}
export default News
