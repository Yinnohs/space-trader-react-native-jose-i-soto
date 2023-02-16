import { createContext, useMemo, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({children}:{children:any})=>{
    const [appData, setUserData] = useState()

    const value = {
        data: appData,
        set: setUserData

    }

    const appContextValue = useMemo<>(()=> value ,[appData])

    return(
        <UserContext.Provider value={appContextValue}>
            {children}
        </UserContext.Provider>
    )
} 


