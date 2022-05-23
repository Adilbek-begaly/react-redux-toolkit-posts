import axios from "axios";


export default class PostService {
    static async getAll () {
        const response = axios.get('https://jsonplaceholder.typicode.com/posts')
        return response
    }

    static async getById(id) {
        const response = axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    }
}