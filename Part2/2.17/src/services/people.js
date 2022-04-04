import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => {
       return (
       response.data
      
       
       )   
})
}

const create = newPerson => {
    const request = axios.post(baseURL, newPerson)
    return request.then(response => {
        return response.data
    })
}

const remove = person => {
    const request = axios.delete(baseURL+"/"+ person)
    return request.then(response => {
        return response.data
    })
}

export default {
    getAll: getAll,
    create: create,
    remove: remove
}