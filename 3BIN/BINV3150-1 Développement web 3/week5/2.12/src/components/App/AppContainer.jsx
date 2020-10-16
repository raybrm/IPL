import React, {useState, useEffect} from "react";
import axios from 'axios'
import App from './App'

const AppContainer = () => {

    const [ countries, setCountries ] = useState([])
    const [ filterCountry, setFilterCountry] = useState('') // le filtre


    useEffect(() => {
        console.log(filterCountry)
        if(filterCountry !== '') {
            axios
                .get('https://restcountries.eu/rest/v2/name/'+ filterCountry)
                .then(response => {
                    setCountries(response.data)
                })
                .catch(err => {setCountries([])})
        }
    }, [filterCountry]) // le useEffect est appelé la toute première fois lors du rendu et quand l'état change

    return <App
            changeFilterCountry={setFilterCountry}
            filterCountries={filterCountry}
            countriesToShow={countries}
            />

}

export default AppContainer;