import React from "react";
import AllCountries from "components/Country/AllCountries";
import SearchCountries from "components/SearchCountries/SearchCountries";

const App = ({changeFilterCountry, filterCountries, countriesToShow}) => {

    return (
        <div>
            <SearchCountries filterCountries={filterCountries}
                             setFilterCountry={changeFilterCountry}
            />
            <AllCountries countries={countriesToShow}/>
        </div>
    )

}
export default App