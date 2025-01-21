import sun from '../img/only-sun.svg'
import clouds from '../img/clouds.svg'
import Edit from './Edit';

function City(props) {
    console.log('City props.getWeather:', props.getWeather);
    return (
        <div className="city">
            <h3>{props.city.name}</h3>
            <p>Температура: {props.city.temp}</p>
            <p>Ощущается: {props.city.feels}</p>
            {props.city.temp >= 10 && <img src={sun} alt=''/>}
            {props.city.temp < 10 && <img src={clouds} alt=''/>}
            <button onClick={() => props.deleteWeather(props.city.name)}>Удалить</button>
            <Edit city={props.city} getWeather={props.getWeather} />
        </div>
    )
}

export default City;