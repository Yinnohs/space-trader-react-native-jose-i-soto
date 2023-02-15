import { useContext, useEffect } from 'react';
import {View,Text, Pressable, ImageBackground, Image} from 'react-native'
import { UserContext } from '../context';
import { ScreenProps} from '../types/';
import {checkFreshStart, freshStart, getUsers} from '../storage'
import Logo from '../../assets/imgs/logo.svg'
const backgroundImg = require('../../assets/imgs/back2.png')


export const AuthScreen = (props: ScreenProps<"Auth">) => {
  const {route, navigation} = props
  const {data,set} = useContext(UserContext)

  const handleInitialLoad = async ()=>{
    const isFreshStart  =  await checkFreshStart()
    const users = await getUsers()
    if(!data.isLogged && data.users!.length === 0 && isFreshStart ){
      await freshStart()
      return
    }

    if(!data.isLogged && data.users!.length === 0){
      return 
    }

    return navigation.navigate("Home")
    
  }
  
  useEffect(()=>{
    handleInitialLoad()
  },[])
  
  
  return (
    <View className='flex-1 bg-back' >
      <ImageBackground source={backgroundImg} className='flex-1 justify-center items-center'>
          <View className='flex-col w-[100vw] h-[100vh] rounded-md   shadow-sm items-center justify-center'>
            <View className='flex-col w-[100vw] h-[55vh] justify-start items-center '>
             <Logo />
             <Text className='text-5xl text-center text-secondary mb-5 font-bold '> Welcome Space Adventurer </Text>
            </View>
            
            <View className='flex-row w-[100vw] h-[30vh] items-center justify-evenly'>
              <Pressable onPress={()=> navigation.navigate("Login")}
                className='flex w-[40vw] h-[8vh] rounded-lg  justify-center bg-secondary mb-10 shadow-md'>
                  <Text className='text-2xl text-center text-p-2'>login</Text>
              </Pressable>
              <Pressable  onPress={()=> navigation.navigate("Register")}
              className='flex w-[40vw] h-[8vh] rounded-lg  justify-center bg-p-2 mb-10 shadow-md'>
                  <Text className='text-2xl text-center text-secondary'>Register</Text> 
              </Pressable>
            </View>
            
          </View>
      </ImageBackground>
      
    </View>
  )
}
