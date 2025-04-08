import axios from "axios"
import { CatOptions  } from "../components/Cats/CatOptions"

const CAT_URL = "https://api.thecatapi.com/v1/images/search?format=json&limit=10"

const CAT_FAVORITE_URL = `https://api.thecatapi.com/v1/favourites?sub_id=my-user-1`

    function getCatImages(){
        return axios.get(CAT_URL,CatOptions);
    }

    function getFavoriteData(){
        return axios.get(CAT_FAVORITE_URL,CatOptions);
    }

const CatService = {
    getCatImages,getFavoriteData
}

export default CatService