import { useContext, useState } from 'react'
import {View,Text, Pressable, ImageBackground} from 'react-native'
import {InputText} from '../../components'
import { AppContext } from '../../context'
import { getUsers } from '../../storage'
import { AppContextDataType, ScreenProps } from '../../types'
import { loginUser } from './login.utils'
const backgroundImage = require('../../../assets/imgs/back.png')


export const LoginScreen = (props: ScreenProps<"Login">) => {
  const {route, navigation} = props
  const [token, setToken] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const {data, set} = useContext(AppContext)

  const handleLogin = async()=> { 
    setIsLoading(true)
    const loggedUser = await loginUser(token)
    const users = await getUsers()
    if(loggedUser && users.length !== 0){
      set({
        currentUser: loggedUser.user.username,
        isLogged:true,
        userToken: token,
        users: users as string[]
       }),
       navigation.navigate("Home")
       return
    }
    setIsLoading(false)
  }
  return (
    <View className='flex-1'>
      <ImageBackground source={backgroundImage} blurRadius={0} className='flex-1 justify-center items-center'>
        <View className='flex-col w-[80vw] h-[50vh] rounded-md  shadow-lg items-center justify-center '>
          <Text className='text-5xl text-secondary mb-5 font-bold'> Login </Text>
          <Text className='text-3xl text-secondary mb-5' >Token:</Text>
          <InputText
            errorMsg={errorMsg} 
            data={token} 
            setData={setToken}  
            setErrorMsg={setErrorMsg} 
          />
          <Pressable
          onPress={()=>  handleLogin()}
          className='flex w-[40vw] h-[8vh] rounded-lg  justify-center bg-secondary mb-10 shadow-md mt-5'>
            <Text
            className={`text-primary text-3xl text-center`}>Login</Text>
          </Pressable>
        </View> 
      </ImageBackground>
    </View>
  )
}