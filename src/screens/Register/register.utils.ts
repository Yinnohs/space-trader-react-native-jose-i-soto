import { Alert } from "react-native"
import { createUser } from "../../api/spaceTraders"
import { addToken } from "../../storage"
import { CreatedUserResponse } from "../../types"

export const register = async (username: string) : Promise<boolean>=> {
      if(username == "" || username.length < 3){
          Alert.alert("Username cannot be blank o have less than 3 characters")
          return false
      }

      const userData: CreatedUserResponse | {} = await createUser(username)
      if( "token"  in userData ){
         let tokenCreated = await addToken(userData.user.username, userData.token)
         if(!tokenCreated){
            return false
         }
      }

      if ( "error"  in userData ){
        Alert.alert(userData.error.message)
        return false
      }

      return true

  }