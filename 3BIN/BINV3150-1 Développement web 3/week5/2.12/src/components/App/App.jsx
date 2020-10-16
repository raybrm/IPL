import React from "react";
import AllCountries from "../Country/AllCountries";
import SearchCountries from "../SearchCountries/SearchCountries";

const App = ({changeFilterCountrie, filterCountries, countriesToShow}) => {

    return (
        <div>
            <SearchCountries filterCountries={filterCountries}
                             setFilterCountrie={changeFilterCountrie}
            />
            <AllCountries countries={countriesToShow}/>
        </div>
    )

}
export default App