import { useState } from 'react'
import {View,Text, Pressable, ImageBackground} from 'react-native'
import {InputText} from '../../components'
import { ScreenProps } from '../../types'
const backgroundImage = require('../../../assets/imgs/back.png')


export const LoginScreen = (props: ScreenProps<"Login">) => {
  const {route, navigation} = props
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  return (
    <View className='flex-1'>
      <ImageBackground source={backgroundImage} blurRadius={0} className='flex-1 justify-center items-center'>
        <View className='flex-col w-[80vw] h-[50vh] rounded-md  shadow-lg items-center justify-center '>
          <Text className='text-5xl text-secondary mb-5 font-bold'> Login </Text>
          <Text className='text-3xl text-secondary mb-5' >Token:</Text>
          <InputText
            errorMsg={errorMsg} 
            username={username} 
            setUsername={setUsername}  
            setErrorMsg={setErrorMsg} 
          />
          <Pressable className='flex w-[40vw] h-[8vh] rounded-lg  justify-center bg-secondary mb-10 shadow-md mt-5'>
            <Text className='text-primary text-3xl text-center'>Login</Text>
          </Pressable>
        </View> 
      </ImageBackground>
    </View>
  )
}