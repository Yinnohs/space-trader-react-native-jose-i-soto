import {users} from '../../credentials.json' 
import { CreatedUserResponse } from '../types'

const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=`,
    healthcheck: `https://api.spacetraders.io/game/status`,
    user: `https://api.spacetraders.io/users/`
}



export const getUserinformation = async (user:string)=>{
    const currentUser = users.find((current)=> current.username = user)
    
    try{
        const response = await fetch(endpoints.userProfile + currentUser?.userToken)
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
        const response = await fetch(endpoints.healthcheck)
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
