import React, { useEffect, useState } from 'react'
import { useActionData } from 'react-router-dom'
import axios from 'axios';
import { CatOptions } from '../../components/Cats/CatOptions';
import CatService  from '../../services/CatService';

const Favorites = () => {

  const [favorites,setFavorites] = useState(null);
  const [catData,setCatData] = useState([]);

  async function  fetchData(){
    try{
      const response = await CatService.getFavoriteData();
      setFavorites(response.data)
    }catch(error){
      alert(error.message)
    }
  }

  const populateArray = () =>{
    favorites?.map((favorite)=>{
      axios
      .get(
        `https://api.thecatapi.com/v1/images/${favorite.image_id}`,
        CatOptions
      )
      .then((response) => 
        setCatData((fulldata) => [...fulldata,response.data])
    );
  });
}

  useEffect(()=>{
    fetchData();
    populateArray();
  },[]);  
  
  return <section className='favorite-container'>
    <h1 className='favorite-image-title'>Favorites</h1>
    <button className='favorites-button' onClick={populateArray}>
      Load favorites
    </button>
    <div className='favorite-image-grid'>
    {(catData || []).slice(0,6).map((cat) =>{
      return (<div className='image-button-pair'>
        <div>{cat.image_id}</div>
        <img className='grid-image' src={cat.url}/>
      </div>)
    })}
    </div>
    </section>
  
}

export default Favorites