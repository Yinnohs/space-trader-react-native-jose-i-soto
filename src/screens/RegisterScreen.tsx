import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react'
import {View,Text, Pressable, TextInput, Alert} from 'react-native'
import { createUser } from '../api/spaceTraders'
import { addToken } from '../storage'
import { StackRoutes } from '../types';

type Props = NativeStackScreenProps<StackRoutes, "Register">;

export const RegisterScreen = (props:Props) => {
    const {route, navigation} = props
    const [username, setUsername] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleRegister = async ()=>{
      console.log("12")
        if(username == "" || username.length < 3){
            Alert.alert("Username cannot be blank o have less than 3 characters")
            return undefined
        }


        const userData = await createUser(username)
        if( "token"  in userData ){
           let tokenCreated = await addToken(userData.user.username, userData.token)
           if(!tokenCreated){
            return Alert.alert("Something Happened during token creation")
           }
           Alert.alert(`Token created: ${userData.token} user: ${userData.user.username}`)
        }

        if ( "error"  in userData ){
            return Alert.alert(` error code : ${userData.error.code}, Error message: ${userData.error.message}  `)
        }

    }

  return (
    <View className='flex-1 bg-back  items-center'>
      <Text className='text-3xl text-textp my-10'> Please Introduce your username </Text>
      <View className='flex-col w-[90vw] h-[50vh] rounded-md bg-primary shadow-lg items-center justify-center'>
        <Text className='text-2xl text-textp mb-10' >Username</Text>
        <TextInput className='w-[75vw] py-2  shadow-md bg-third text-lg text-textp' onChangeText={(value)=> setUsername(value)} value={username}/>
        <Pressable 
        className='flex-col mt-10 w-40 h-20 rounded-lg border-2 border-primary  shadow-md bg-third text-lg text-textp justify-center items-center' 
        onPress={()=> {
          setIsLoading(true)
          handleRegister()
        }}
        >
          {<Text className='text-textp text-xl'>Register</Text>}
        </Pressable>
      </View>
    </View>
  )
}