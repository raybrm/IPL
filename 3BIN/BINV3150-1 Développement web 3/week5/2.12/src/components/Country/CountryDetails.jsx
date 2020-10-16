import React from "react";
import './country.css'

const CountryDetails = ({country}) => {

    return (
        <div>
            <h1>
                {country.name}
            </h1>
            capital {country.capital}<br/>
            population {country.population}
            <h3>Languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt="flag-country"/>
        </div>
    )
}

export default CountryDetails