import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3100/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

const itemService = {
    
    list( filter ) {
        return apiClient.get("/items?q="+filter);
    },
    find( id ) {
        return apiClient.get("/items/"+id);
    },
}

export default itemService;