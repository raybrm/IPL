import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:3001/places"
})

const retrieve = () => {
    return client.get("/").then(response => response.data);
}

const addPlace = (newPlace) => {
    return client.post("/", newPlace).then(response => response.data)
}

const deletePlace = (id) => {
    return client.delete('/'+id).then(response => response)
}


export {
    retrieve,
    addPlace,
    deletePlace
}