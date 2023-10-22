import axios from "axios";


const instance = axios.create({
    baseURL: 'http://45.90.33.31:5000/'
    // baseURL: 'http://localhost:5000'
})



export default instance