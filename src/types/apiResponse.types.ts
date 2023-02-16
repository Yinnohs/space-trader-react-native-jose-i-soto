export type ErrorApi = {
    error: ErrorApiData
}
type ErrorApiData = {
    message:string,
    code: number
}

export type CreatedUser = {
    token:string,
    user:User
}

export type User = {
    username: string,
    credits: number,
    ships: [],
    loans:[]
}

export type UserInformation = {
    user:{
        credits: number,
        joinedAt: string,
        shipCount: number,
        structureCount: number,
        username: string
    }
        
}

export type CreatedUserResponse = CreatedUser | ErrorApi
export type UserInformationResponse = UserInformation | ErrorApi
