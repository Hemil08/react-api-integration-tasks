import axios from "axios";


export async function getWeather(search){

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba2e1135551072d504d39796c1a30596`)
        return response.data
    }catch(error){
        return error
    }
    
}

const WeatherService ={
    getWeather
}

export default WeatherService