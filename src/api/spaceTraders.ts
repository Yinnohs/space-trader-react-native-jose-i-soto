import { Alert } from 'react-native'
import { CreatedUserResponse } from '../types'
import { ShipApiResponse, SystemShipApiResponse } from '../types/apiResponse.types'
import { listShipTypes } from './utils'

const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account`,
    healhtcheck: `https://api.spacetraders.io/game/status`,
    user: `https://api.spacetraders.io/users/`,
    loans: `https://api.spacetraders.io/types/loans`,
    redeemLoan: `https://api.spacetraders.io/my/loans`,
    systemInfo: `https://api.spacetraders.io/systems/OE/`,
    allShips: `https://api.spacetraders.io/types/ships`,
    systemShips:`https://api.spacetraders.io/systems/OE/ship-listings`
}



export const getUserinformation = async (token:string)=>{
    try{
        const response = await fetch(endpoints.userProfile,{
            headers:{
                
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    }
    catch(error){
        console.error(error)
        return[]
    }
}

export const getShips = async (token:string)=>{
    try{
        const response = await fetch(endpoints.systemShips,{
            headers:{
                
                "Authorization": `Bearer ${token}`
            }
        })

        const data:SystemShipApiResponse = await response.json()

        if("error" in data){
            Alert.alert(data.error.message)
            return undefined
        }
        return data
    }
    catch(error){
        console.error(error)
        return undefined
    }
}

export const getShipTypes= async (token:string)=>{
    try{
        const response = await fetch(endpoints.allShips,{
            headers:{
                
                "Authorization": `Bearer ${token}`
            }
        })
        const data:ShipApiResponse = await response.json()
        if("ships" in data){
            const filteredData = listShipTypes(data)
            return filteredData
        }
        
        if("error" in data){
            Alert.alert(data.error.message)
            return []    
        }

        return []
    }
    catch(error){
        console.error(error)
        Alert.alert("Somthing happened getting ship types")
        return[]
    }
}


export const getLoans = async (token:string)=>{
    try{
        const response = await fetch(endpoints.loans,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    }
    catch(error){
        console.error(error)
        return[]
    }
}

export const redeemLoan = async (token:string, type:string)=>{
    try{
        const typeOfLoan = { type:type }
        const request = JSON.stringify(typeOfLoan)
        const response = await fetch(endpoints.redeemLoan,{
            method:'Post',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:request
        })
        const data = await response.json()
        return data
    }
    catch(error){
        console.error(error)
        return[]
    }
}

export const checkServerStatus = async ()=>{
    try{
        const response = await fetch(endpoints.healhtcheck)
        const data = await response.json()
        return data
    }
    catch(error){
        console.error(error)
        return[]
    }
}

export const createUser = async (username:string): Promise<CreatedUserResponse | {}> =>{
    try {
        const response = await fetch(`${endpoints.user}${username}/claim`,{
            method: "POST"
        })
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
        return{}
    }
}
