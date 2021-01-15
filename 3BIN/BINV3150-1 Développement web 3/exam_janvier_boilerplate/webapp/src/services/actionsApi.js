import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:3001/actions"
})

const retrieve = () => {
    return client.get("/").then(response => response.data);
}

const addAction = (newAction) => {
    return client.post("/", newAction).then(response => response.data)
}


export {
    retrieve,
    addAction
}