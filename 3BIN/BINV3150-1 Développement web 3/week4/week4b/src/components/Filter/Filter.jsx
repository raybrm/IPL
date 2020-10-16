import React from 'react'

const Filter = ({filter, changeFilter}) => {

    const handleFilter = (event) => {
        changeFilter(event.target.value)
    }

    return(
        <div>
            filter shown with : <input value={filter} onChange={handleFilter}/>
        </div>
    )
}

export default Filter