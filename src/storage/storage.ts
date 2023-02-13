import * as KeyStorage from 'expo-secure-store'
import Storage from '@react-native-async-storage/async-storage';

const USERS_KEY = "UsersList"

export async function addToken(username:string, token:string ){
    username = username.trim()
    username = username.split(" ").join()
    console.log(username)
    try {
        await KeyStorage.setItemAsync(username,token)
        return true    
    
    } catch (error) {
        console.error(error)
        return false
    }
}

export async function checkFreshStart (){
    try{
        const currentUsers = await Storage.getItem(USERS_KEY)

        if(!currentUsers){
            return true
        }
        return false

    }catch(error){
        console.error(error)
        return false
    }
}

export async function freshStart (){
    
    try {
        const users = JSON.stringify([])
        await Storage.setItem(USERS_KEY, users)    
    } catch (error) {
        console.error(error)
        return false
    }
    
}

export  async function addUser  (username:string) {
    username = username.trim()
    username = username.split(" ").join("")
    try{

        const currentUsers = await Storage.getItem(USERS_KEY)

        if(!currentUsers){
            return false
        }

        const currentData = JSON.parse(currentUsers)

        const newData = [...currentData, username ]

        const newUsers = JSON.stringify(newData)

        await Storage.setItem(USERS_KEY, newUsers)

        return true
        
    }catch(error){
        console.error(error)
        return false
    }
} 

export async function getUsers(){
    try {
        const stringData = await Storage.getItem(USERS_KEY)
        if(!stringData){
            console.log("pasando por false")
            return []
        }
        const data = JSON.parse(stringData)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}