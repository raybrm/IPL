import React , {useEffect, useState} from 'react'

import * as actionsService from 'services/actionsApi'
import * as placesService from 'services/placesApi'

import * as randomUtils from 'utils/random'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [ actions, setActions ] = useState([])
    const [ places, setPlaces ] = useState([])
    const [ disasters, setDisasters ] = useState([]) 

    const initialActionsLoad = () => {
        actionsService.retrieve()
                    .then(response => setActions(response))
                    .catch(error => console.log("Unable to load actions data ", error))
    }
    useEffect(initialActionsLoad, [])

    const initialPlacesLoad = () => {
        placesService.retrieve()
                    .then(response => setPlaces(response))
                    .catch(error => console.log("Unable to load places data ", error))
    }
    useEffect(initialPlacesLoad, [])
    
    const buildDisasters = (count, year) => {

        const myDisaters = []
        for (let index = 0; index < count; index++) {
            const DisasterDate = randomUtils.randomDate(year)
            const newDisaster = {
                id : (Math.random() * 999999).toFixed(0),
                name: `${randomUtils.randomItem(actions).name} ${randomUtils.randomItem(places).name }`,
                date : DisasterDate
            }
            myDisaters.push(newDisaster)
        }
        setDisasters(myDisaters)
    }


    const sortingDisasters = () => {
        if (disasters !== undefined) {
            return disasters.sort((a,b) => a.date.getTime() - b.date.getTime())
        } 
    }

    const sortedDisastersByDate = sortingDisasters()

    const addPlace = (name) => {
        const newPlace = {name}
        placesService.addPlace(newPlace)
                    .then(insertedPlace => {setPlaces(places.concat(insertedPlace))})
                    .catch(error => console.error("Unable to insert data", error))
    }

    const deletePlace = (id) => {
        const index = places.findIndex(place => place.id === id)
        if (index === -1) {
            console.warn("place item with provided id does not exist")
            return
        }
        const newPlaces = [...places]
        newPlaces.splice(index, 1)
        placesService.deletePlace(id)
                    .then(() => setPlaces(newPlaces))
                    .catch(error => console.error("Unable to delete data", error))
    }

    const exposedValues = {
        places,
        setPlaces,
        buildDisasters, 
        sortedDisastersByDate,
        addPlace,
        deletePlace
    }

    return (
        <Context.Provider value={exposedValues}>
            { props.children }
        </Context.Provider>
    )
}

export {
    Context, ProviderWrapper
}

export default Context