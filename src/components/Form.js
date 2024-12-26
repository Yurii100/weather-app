import { useState } from "react";

function Form(props) {
    const [city, setCity] = useState('')

    const handleGetWeather = (city) => {
        props.getWeather(city.trim())
        setCity("")
    };

    return (
        <div>
            <h1>Получение погоды</h1>
            <form>
                <input placeholder="Введите город" value={city}
                    onChange={e => setCity(e.target.value)} />
                <button type="button" onClick={() => handleGetWeather(city)}>Получить</button>
            </form>
        </div>
    )
}

export default Form;