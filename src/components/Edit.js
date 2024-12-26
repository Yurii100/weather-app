import { useState } from "react";

function Edit(props) {
    const [isEdit, setisEdit] = useState(false);
    const [inputValue, setinputValue] = useState("");

    const toggleEdit = () => {
        setisEdit(!isEdit)
    };

    const updateWeather = (newCityName, oldCityName) => {
        console.log('Edit updateWeather called with:', inputValue.trim(), props.city.name);
        props.getWeather(newCityName.trim(), oldCityName);
        setisEdit(false)
    };

    console.log('Edit props.getWeather:', props.getWeather);

    return (
        <div>
            <input type="button" value="Редактировать" onClick={() => toggleEdit()} />
            {
                isEdit && (
                    <div>
                        <form>
                            <input type="text" value={inputValue} onChange={e => setinputValue(e.target.value)} placeholder="Новый город" />
                            <input type="button" value="Обновить" onClick={() => updateWeather(inputValue, props.city.name)} />
                        </form>
                    </div>
                )
            }
        </div>
    )
};

export default Edit;