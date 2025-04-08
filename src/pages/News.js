import React from 'react'
import { useState } from 'react'
import NewsNavbar from '../components/News/NewsNavbar'
import NewsBoard from '../components/News/NewsBoard'

const News = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <NewsNavbar setCategory={setCategory}/> 
      <NewsBoard category={category}/>
    </div>
  )
}

export default News