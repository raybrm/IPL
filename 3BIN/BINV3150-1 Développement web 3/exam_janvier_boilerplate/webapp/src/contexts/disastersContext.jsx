import React , {useEffect, useState} from 'react'

import * as actionsService from 'services/actionsApi'
import * as placesService from 'services/placesApi'

import * as randomUtils from 'utils/random'

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [ actions, setActions ] = useState([])
    const [ places, setPlaces ] = useState([])
    //const [ nbDisasters, setNbDisasters] = useState(JSON.parse(localStorage.getItem('nbDisaster')))

    //console.log(nbDisasters)

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
    
    
    const createDisasters = () => { // mettre dans le composant calendar
        console.log("ici")
        if (places.length > 0 && actions.length > 0){ // if (places !== undefined) 
            console.log("traitement")
            console.log(randomUtils.randomItem(actions))
            console.log(randomUtils.randomItem(places))
            console.log(randomUtils.randomDate('2021'))
        }
    }

    //createDisasters()

    // Ajout d'une action en db
    const addAction = (name) => {
        const newAction = {
            name
        }
        actionsService.addAction(newAction)
                    .then(insertedAction => setActions(actions.concat(insertedAction)))
                    .catch(error => console.error("Unable to insert data ", error))
        
    }


    const exposedValues = {
        actions,
        setActions,
        places,
        setPlaces,
        addAction
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