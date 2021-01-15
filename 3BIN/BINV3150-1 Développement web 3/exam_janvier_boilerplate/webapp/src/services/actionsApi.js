import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:3001/actions"
})

const retrieve = () => {
    return client.get("/").then(response => response.data);
}


export {
    retrieve
}