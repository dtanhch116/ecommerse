import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { getInfo } from "@/apis/authService";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [ userInfo, setUserInfo ] = useState(null);
    const userId = Cookies.get('userId');

    useEffect(() => {
        if(userId) {
            getInfo(userId).then((res) => {
                setUserInfo(res.data.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, []);
    
    return (
        <StoreContext.Provider value={{ userInfo }}>
        { children }
    </StoreContext.Provider>
    )
}