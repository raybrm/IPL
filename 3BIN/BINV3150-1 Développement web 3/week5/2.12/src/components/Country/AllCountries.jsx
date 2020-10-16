import React from "react";
import CountryDetails from "./CountryDetails";
import Country from "./Country";

const AllCountries = ({countries}) => {

    console.log("affichage pays ")
    if (countries.length === 1 ) {
        return <CountryDetails country={countries[0]}/>
    } else if (countries.length < 10){
        return (
            <>
                {countries.map(country => <Country key={country.alpha3Code} countrie={country}/>)}
            </>
        )
    } else {
        return  <p> Too many matches, specify another filter</p>
    }
}

export default AllCountries