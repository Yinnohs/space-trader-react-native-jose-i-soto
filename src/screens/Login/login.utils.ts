import { Alert } from "react-native"
import { err } from "react-native-svg/lib/typescript/xml"
import { getUserinformation } from "../../api"
import { addToken, addUser } from "../../storage"
import { UserInformationResponse } from "../../types/apiResponse.types"

export const loginUser = async(token:string)=>{
    try {
        if(token == "" || token.length <5 ){
            Alert.alert("Token cannot be blank o have less than 5 characters")
            return false
        }
  
        const userData:UserInformationResponse = await getUserinformation(token);


        if( "user"  in userData){
            let tokenCreated = await addToken(userData.user.username, token)
            let userAdded = await addUser(userData.user.username)
            if(!tokenCreated || !userAdded){
               return false
            }
            return userData
        }
        console.log(userData)
        Alert.alert(" Invalid Token ")
        return false

    } catch (error) {
        console.error(error)
        return false
    }
}