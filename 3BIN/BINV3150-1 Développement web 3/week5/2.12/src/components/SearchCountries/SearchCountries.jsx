import React from "react";

const SearchCountries = ({ filterCountries, setFilterCountry}) => {

    const handleForm = (event) => {
        event.preventDefault()
    }

    const handleCountrieSearchChange = (event) => {
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