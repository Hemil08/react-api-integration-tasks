import axios from "axios";
import {coinApiKey} from ".././env"

const COIN_URL = "https://openapiv1.coinstats.app/coins?currency=INR"

    function getCoin(){
        return axios.get(COIN_URL,{
            headers:{'X-API-KEY':coinApiKey}
        })
    }

const CoinService={
    getCoin
}

export default CoinService