import { createContext, useContext, useMemo, useState } from "react";
import {UserContextDataType, UserContextType} from "../types";

export const UserContext = createContext <UserContextType>({
    data:{users:[],
    currentUser:"",
    userToken: "",
    isLogged:  false},
    set:()=> {} 
})

export const UserProvider = ({children}:{children:any})=>{
    const [userData, setUserData] = useState<UserContextDataType>(
        {
                users:[],
                currentUser:"",
                userToken: "",
                isLogged:  false 
        }
    )

    const value:UserContextType = {
        data: userData,
        set: setUserData

    }

    const userContextValue = useMemo<UserContextType>(()=> value ,[userData])

    return(
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
} 


