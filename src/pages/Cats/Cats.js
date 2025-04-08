import React, { useEffect } from "react";
import CatsNavbar from "../../components/Cats/CatsNavbar";
import "../../assets/styles/Cats.css";
import { useState } from "react";
import CatService from "../../services/CatService";
import { apikey } from "../../env";
import axios from "axios";

const Cats = () => {
  const [catData, setCatData] = useState(null);

  async function fetchCatData() {
    try {
      const response = await CatService.getCatImages();
      setCatData(response.data);
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    fetchCatData();
  }, []);

  const handleOnClick = (e) =>{
    e.preventDefault();
    fetchCatData(); 
  }

  const onClickAdd = (e,catId) =>{
    e.preventDefault();

    const catAddFavoriteOptions = {
      headers : {
        "Content-Type" : "application/json",
        "x-api-key" : apikey,
      },
    };

    var data = {
      image_id : catId,
      sub_id : "my-user-1"
    };

    axios.post(
      "https://api.thecatapi.com/v1/favourites",
      data,
      catAddFavoriteOptions
    )
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
    });
  };



  return (
    <div className="cat-page">
      <CatsNavbar />

      <section className="main-container">
        <div className="image-grid ">
          {(catData || []).slice(0, 4).map((cat) => {
            return(<div key={cat.id} className="image-button-pair">
              <img className="grid-image" src={cat.url} alt="cat images"/>
              <button className="grid-button" onClick={(e) => onClickAdd(e,cat.id) }>
                <span class="material-symbols-outlined navbar-icon">
                  favorite
                </span>
              </button>
            </div>
            )
          })}
        </div>
      

        <div className="main-container-description">
          <h2 className="main-container-title">Cat Image Generator</h2>
          <div className="main-container-text">
            Cat paradise is where you can click on the button below to get random images of cats. Clickon the "Add" button to add them to your favorites.
          </div> 
          <button className="main-container-button" onClick={handleOnClick}>
            Randomize
          </button>

        </div>
      </section>

    </div>
  );
};

export default Cats;
