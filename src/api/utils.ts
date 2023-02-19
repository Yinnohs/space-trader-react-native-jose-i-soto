import { ShipApiResponse } from "../types/apiResponse.types";

export const listShipTypes = (shipsApiResponse: ShipApiResponse)=> {
    if("ships" in shipsApiResponse){
        return shipsApiResponse.ships.reduce((acc, current)=>{
             acc.push(current.type)
             return acc
        },[] as string[])
    }
} 