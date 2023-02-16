import {users} from '../../credentials.json' 
import { CreatedUserResponse } from '../types'

const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account`,
    healhtcheck: `https://api.spacetraders.io/game/status`,
    user: `https://api.spacetraders.io/users/`
}



export const getUserinformation = async (token:string)=>{
    try{
        const response = await fetch(endpoints.userProfile,{
            headers:{
                "Authorization": "Bearer b2ef474b-5a62-4e90-8cc9-3fe7b4996dd8"
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
