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


export type Loans = {
    amount: number,
    collateralRequired: boolean,
    rate:number,
    termInDays: number,
    type: string
}
export type LoansApiResponse={
    loans: Loans[]
}


export type Ship = {
    type: string,
    class: string,
    maxCargo: number,
    loadingSpeed: number,
    speed: number,
    manufacturer: string,
    plating: number,
    weapons: number
}

export type Ships = {
    ships:Ship[]
}

export type ShipApiResponse = ErrorApi | Ships

export type SystemShip = Ship & {
    puracheLocation:{
        system: string,
        location: string,
        price: number
    }
}

export type SystemShips = {
    shipListings: SystemShip[]
}

export type SystemShipApiResponse = ErrorApi | SystemShips

