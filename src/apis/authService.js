import Cookies from "js-cookie";
import axiosClient from "./axiosClient";

const register = async (body) => {
    console.log(body);
    return await axiosClient.post('/register', body)
}

const signIn = async (body) => {    
    return await axiosClient.post('/login', body)
}

const getInfo = async (body) => {
    const id = Cookies.get('id');
    return await axiosClient.get(`/user/info/${id}`)
}

export {
    register, signIn, getInfo
}