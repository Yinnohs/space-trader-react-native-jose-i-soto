import { createContext, useMemo, useState } from "react";
import { UserContextType, UserInformation } from "../types";

export const UserContext = createContext<UserContextType>({
    userData:{user:{
        username: "Y",
        "shipCount": 0,
        "structureCount": 0,
        "joinedAt": "2023-02-16T11:01:30.903Z",
        "credits": 0
    }},
    setUserData: ()=> {}
})

export const UserProvider = ({children}:{children:any})=>{
    const [data, setData] = useState(
        {
            user:{
                username: "Y",
                "shipCount": 0,
                "structureCount": 0,
                "joinedAt": "2023-02-16T11:01:30.903Z",
                "credits": 0
            }
        }
    )

    const value = {
        userData: data,
        setUserData: setData

    }

    const userContextValue = useMemo<UserContextType>(()=> value ,[data])

    return(
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
} 


