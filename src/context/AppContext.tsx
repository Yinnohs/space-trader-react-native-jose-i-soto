import { createContext, useMemo, useState } from "react";
import { appContextDefault } from "../constants";
import {AppContextDataType,   AppContextType} from "../types";

export const AppContext = createContext <AppContextType>(appContextDefault)

export const AppProvider = ({children}:{children:any})=>{
    const [appData, setUserData] = useState<AppContextDataType>(
        {
                users:[],
                currentUser:"",
                userToken: "",
                isLogged:  false
        }
    )

    const value:AppContextType = {
        data: appData,
        set: setUserData

    }

    const appContextValue = useMemo<AppContextType>(()=> value ,[appData])

    return(
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
} 


