import { UserInformation } from "./apiResponse.types"


export type AppContextDataType = {
    users?: string[]
    currentUser?: string
    userToken?: string,
    isLogged?:boolean
}

export type AppContextType ={
    data: AppContextDataType
    set: AppContextDataSetterType
}

export type AppContextDataSetterType = (data:AppContextDataType)=> void

export type UserContextDataSetterType = (userData: UserInformation)=> void

export type UserContextType = {
    userData: UserInformation
    setUserData: UserContextDataSetterType  
}


