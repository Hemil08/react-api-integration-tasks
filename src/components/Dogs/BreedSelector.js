import React,{useEffect, useState} from 'react'
import { getBreedsList,getBreedImage } from '../../services/DogsService'

const BreedSelector = () => {

    const [breeds,setBreeds] = useState([]);
    const [selectedBreed,setSelectedBreed] = useState("");
    const [breedImage,setBreedImage] = useState(null);

    // fetchlist

    const fetchBreeds = async () => {
        try{
            const breedList = await getBreedsList();
            setBreeds(breedList);
        }catch(error){
            alert(error.message)
        }
    };

    useEffect( ()=>{
        fetchBreeds();
    },[])

    const fetchBreedImage = async (breed) =>{
        try{
            const image = await getBreedImage(breed);
            setBreedImage(image);
        }catch(error){
            alert(error.message)
        }
    }

    function handleBreedChange(e){
        const breed = e.target.value;
        setSelectedBreed(breed);
        if (breed) {
            fetchBreedImage(breed);
        }
    }


  return (
    <div>
        <h3>Select a Dog Breed</h3>
        <select value={selectedBreed} onChange={handleBreedChange}>
            <option value="">--Select a breed --</option>

            {breeds.map((breed) => (
                <option key={breed} value={breed}>
                    {breed}
                </option>
            ))}
        </select>

        {breedImage && (
        <div>
          <img src={breedImage} alt={selectedBreed}/>
        </div>
      )}

    </div>
  )
}

export default BreedSelector