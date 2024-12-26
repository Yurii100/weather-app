import City from './City'

function Weather(props) {
    console.log('Weather props.getWeather:', props.getWeather);

    const data = props.cities.length === 0 ?
        (<p>Пока еще нет городов</p>) : (<div>
            {props.cities.map(el => (
                <City deleteWeather={props.deleteWeather} getWeather={props.getWeather} key={el.name} city={el} />
            ))}
        </div>)

    return (<div>
        <h2>Все города</h2>
        {data}
    </div>)
}

export default Weather;