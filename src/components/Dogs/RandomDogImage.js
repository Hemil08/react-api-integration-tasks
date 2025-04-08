import React,{useState} from 'react'
import { getRandomDogImage } from '../../services/DogsService'

const RandomDogImage = () => {

    const [dogImage,setDogImage] = useState(null);

    const fetchRandomDogImage = async () =>{
        try{
            const image = await getRandomDogImage();
            setDogImage(image);
        }catch(error){
            alert(error.message)
        }
    }

  return (
    <div>
        <button onClick={fetchRandomDogImage}>Get Random Dog Image</button>
        {dogImage && <img src={dogImage} alt="Random Dog"/>}
    </div>
  )
}

export default RandomDogImage