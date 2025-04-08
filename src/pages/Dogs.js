import React from 'react'
import RandomDogImage from '../components/Dogs/RandomDogImage'
import BreedSelector from '../components/Dogs/BreedSelector'

const Dogs = () => {
  return (
    <div>
        <h1>Dog Image App</h1>
        <RandomDogImage/>
        <BreedSelector/>
    </div>
  )
}

export default Dogs