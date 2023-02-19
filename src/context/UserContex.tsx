import { createContext, useMemo, useState } from "react";
import { userContextDefault } from "../constants";
import { UserContextType, UserInformation } from "../types";

export const UserContext = createContext<UserContextType>(userContextDefault)

export const UserProvider = ({children}:{children:any})=>{
    const [data, setData] = useState(
        {
            user:{
                username: "",
                shipCount: 0,
                structureCount: 0,
                joinedAt: "",
                credits: 0
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


