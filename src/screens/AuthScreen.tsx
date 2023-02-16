import { useContext, useEffect, useState } from 'react';
import {View,Text, Pressable, ImageBackground, Image} from 'react-native'
import { AppContext } from '../context';
import { ScreenProps} from '../types/';
import {checkFreshStart, freshStart, getUsers} from '../storage'
import Logo from '../../assets/imgs/logo.svg'
import { checkServerStatus } from '../api/spaceTraders';
const backgroundImg = require('../../assets/imgs/back2.png')


export const AuthScreen = (props: ScreenProps<"Auth">) => {
  const {route, navigation} = props
  const {data,set} = useContext(AppContext)
  const [serverStatus, setServerStatus] = useState("")

  const handleInitialLoad = async ()=>{
    const isFreshStart  =  await checkFreshStart()
    const currentServerStatus = await checkServerStatus()
    if(currentServerStatus !== "" ){
        setServerStatus(currentServerStatus)
    }
    
    if(!data.isLogged && data.users!.length === 0 && isFreshStart ){
      await freshStart()
      
      
      return
    }

    if(!data.isLogged && data.users!.length === 0){
      return 
    }
    const users = await getUsers()
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

            <View className='flex-row w-[100vw] h-[5-vh] justify-center items-center gap-4' >
                <Text className='text-lg text-center text-secondary'>Server Status</Text>
                <View className={`rounded-full w-5 h-5 ${serverStatus !== "" ? 'bg-pass' : 'bg-warning'}`}></View>
            </View>
            
          </View>
      </ImageBackground>
      
    </View>
  )
}
