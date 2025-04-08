import axios from 'axios';

const DOGS_BASE_URL = "https://dog.ceo/api"

// TO GET DOG IMAGES

export const getRandomDogImage = async function getDogs(){
    try{
        const response = await axios.get(`${DOGS_BASE_URL}/breeds/image/random`);
        return response.data.message;
    }catch(error){
        alert(error.message)
    }
};

// TO GET THE LIST OF DOG BREEDS

export const getBreedsList = async() =>{
    try{
        const response = await axios.get(`${DOGS_BASE_URL}/breeds/list/all`);
        return Object.keys(response.data.message)
    }catch(error){
        alert(error.message)
    }
};

// TO GET AN IMAGE FOR A SPECIFIC BREED

export const getBreedImage = async (breed) =>{
    try{
        const response = await axios.get(`${DOGS_BASE_URL}/breed/${breed}/images/random`);
        return response.data.message;
    }catch(error){
        alert(error.message)
    }   
}