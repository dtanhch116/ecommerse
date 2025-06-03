import axios from "axios";

const axiosClient = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})