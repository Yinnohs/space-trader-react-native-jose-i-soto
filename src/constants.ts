export const appContextDefault = {
    data:{users:[],
    currentUser:"",
    userToken: "",
    isLogged:  false},
    set:()=> {} 
}

export const appContextDefaultValue = {
    users:[],
    currentUser:"",
    userToken: "",
    isLogged:  false,
}

export const userContextDefault = {
    userData:{
        user:{
            username: "",
            shipCount: 0,
            structureCount: 0,
            joinedAt: "",
            credits: 0
        }
    },
    setUserData: ()=> {}
}

export const userContextDefaultValue = {
    user:{
        username: "",
        shipCount: 0,
        structureCount: 0,
        joinedAt: "",
        credits: 0
    }
}