import React, {useState, useEffect} from "react";
import axios from 'axios'
import App from './App'

const AppContainer = () => {

    const [ countries, setCountries ] = useState([])
    const [ filterCountrie, setFilterCountrie] = useState('') // le filtre


    useEffect(() => {
        console.log(filterCountrie)
        axios
            .get('https://restcountries.eu/rest/v2/name/'+ filterCountrie)
            .then(response => {
                setCountries(response.data)
            })
            .catch(err => {setFilterCountrie('')})
    }, [filterCountrie]) // le useEffect est appelé la toute première fois lors du rendu et quand l'état change

    return <App
            changeFilterCountrie={setFilterCountrie}
            filterCountries={filterCountrie}
            countriesToShow={countries}
            />

}

export default AppContainer;