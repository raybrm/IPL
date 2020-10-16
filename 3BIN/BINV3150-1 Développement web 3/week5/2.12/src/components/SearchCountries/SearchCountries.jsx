import React from "react";

// Form pour recherche un/des pays
const SearchCountries = ({ filterCountries, setFilterCountrie}) => {

    const handleForm = (event) => {
        event.preventDefault()
    }

    const handleCountrieSearchChange = (event) => {
        setFilterCountrie(event.target.value)
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