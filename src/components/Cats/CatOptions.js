import {apikey} from '../../env';


export const CatOptions = {
    method : "GET",
    headers:{
        "Content-Type" : "application/json",
        "x-api-key" : apikey,
    },
};
