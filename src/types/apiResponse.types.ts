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

export type CreatedUserResponse = CreatedUser | ErrorApi
