import React from "react";

const SearchCountries = ({ filterCountries, setFilterCountry}) => {

    const handleForm = (event) => { // évite de rafrachir la page après avoir appuyé sur Enter
        event.preventDefault()
    }

    const handleCountrieSearchChange = (event) => { // la fonction appelé quand l'input change
        setFilterCountry(event.target.value)
    }

    return (
        <form onSubmit={handleForm}>
            <div>
                find countries: <input value={filterCountries} onChange={handleCountrieSearchChange} />
            </div>
        </form>
    )

}

export default SearchCountries