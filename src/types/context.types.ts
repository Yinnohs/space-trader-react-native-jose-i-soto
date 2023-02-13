

export type UserContextDataType = {
    users?: string[]
    currentUser?: string
    userToken?: string,
    isLogged?:boolean
}

export type UserContextType ={
    data: UserContextDataType
    set: UserContextDataSetterType
}

export type UserContextDataSetterType = (data: UserContextDataType)=> void
