import React from "react";
import CountryDetails from "./CountryDetails";
import Country from "./Country";

/*
3 manières de faire:
-   Utiliser un composant qui reçoit un props supplémentaire pour dire si on veut le composant détailé ou pas
-   Enlever le composant qui affiche le nom et mettre directement le nom dans <p>
-   Faire deux composants différents en ce disant qu'on peut modifier facilement le composant (comme mtnt)
 */
const AllCountries = ({countries}) => {

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