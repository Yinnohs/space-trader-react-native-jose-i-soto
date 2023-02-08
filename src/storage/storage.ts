import * as Storage from 'expo-secure-store'

export const addToken  = async(tokenKey:string, token:string )=> {
    tokenKey = tokenKey.trim()
    console.log(tokenKey)
    try {
        await Storage.setItemAsync(tokenKey,token)
        return true    
    
    } catch (error) {
        console.error(error)
        return false
    }
}