import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react'
import {View,Text, Pressable, ImageBackground} from 'react-native'
import { InputText } from '../../components';
import { AppContext } from '../../context';
import { addUser, getUsers } from '../../storage';
import { CreatedUser, StackRoutes } from '../../types';
import { register } from './register.utils';

const registerBgImage = require('../../../assets/imgs/setsail.jpg')


type Props = NativeStackScreenProps<StackRoutes, 'Register'>;

export const RegisterScreen = (props:Props) => {
    const {route, navigation} = props
    const [username, setUsername] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const {data,set} = useContext(AppContext)

   const handleRegister = async ()=>{
    const userData  = await register(username) as CreatedUser
    const isUserAdded = await addUser(username)
    const users = await getUsers()
    if(userData || isUserAdded){
      set({users: users,
          isLogged:true, 
          userToken: userData.token, 
          currentUser:userData.user.username
        })
      navigation.navigate('Home')
      return
    }
    setIsLoading(false)
   }

  return (
    <View className='flex-1'>
      <ImageBackground source={registerBgImage} blurRadius={6} className='flex-1 border-2'>  
        <View className='flex-col w-[100vw] h-[80vh] rounded-md shadow-1lg items-center justify-center'>
          <Text className='text-2xl text-secondary my-10'> Please Introduce your username </Text>
          <InputText 
            errorMsg={errorMsg} 
            data={username} 
            setData={setUsername}  
            setErrorMsg={setErrorMsg} 
          />
          <Pressable 
          className={`flex-col mt-10 w-[60vw] h-[8vh] rounded-lg shadow-lg bg-p-2 justify-center items-center`} 
          onPress={()=> {
            setIsLoading(true)
            handleRegister()
          }}
          disabled = {isLoading  || errorMsg !== '' ? true : false}
          >
            
            <Text className='text-secondary text-2xl'>Register</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}