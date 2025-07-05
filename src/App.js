import { useState } from 'react'
import Form from './components/Form'
import Weather from './components/Weather'
import sun from './img/sun.svg'
import axios from 'axios'

function App() {
    const [cities, setCities] = useState([])

    const getWeather = (city, oldCityName=false) => {
        console.log('App getWeather called with:', city, oldCityName);
        if (city === '') return

        const API = '3d9de74844d28377e81415151cbe6a66'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`

        axios.get(url).then(res => {
            const newCityData = {
                name: city,
                temp: res.data.main.temp,
                feels: res.data.main.feels_like
            }
            if (oldCityName) {
                setCities(
                    cities => cities.map(city => city.name === oldCityName ? newCityData : city)
                )
            } else {
                setCities(cities => [newCityData, ...cities])
            }
        }).catch(err => console.log(err))
    }

    const deleteWeather = (city) => {
        const newCities = cities.filter(el => {
            return el.name !== city
        })
        setCities(newCities)
    }

    console.log('App getWeather:', getWeather);

    return (<div className='main'>
        <img src={sun} className='sun' alt='sun'/>
        <Form getWeather={getWeather}/>
        <Weather cities={cities} getWeather={getWeather} deleteWeather={deleteWeather}/>
    </div>)
}

export default App;