
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext, useEffect, useState } from 'react';
import {View,Text, Image, Pressable} from 'react-native'
import { getUserinformation } from '../../api';
import { AppContext, UserContext } from '../../context';
import { StackRoutes } from '../../types/screens.types';

type Props = NativeStackScreenProps<StackRoutes, "Home">;


export const HomeScreen = (props: Props) => {
  const {route, navigation} = props
  const {data,set} = useContext(AppContext)
  const {userData, setUserData} = useContext(UserContext)

  const handleInit = async()=>{
    try {
      const dataResponse = await getUserinformation(data.userToken!)  
      setUserData(dataResponse)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    handleInit()
  }, [data])
  
  return (
    <View className='flex-1 items-center justify-center bg-p-4 gap-4' >
      <View className=' flex-col w-[80vw] h-[20vh] justify-center items-center bg-p-2 shadow-lg rounded-lg overflow-hidden gap-2'>
        <Image className='rounded-full w-20 h-20' 
        source={require('../../../assets/imgs/user.png')}/>
        <Text className='text-secondary text-2xl'>
          {userData.user.username}
        </Text>
      </View>

      <Pressable
      onPress={()=> navigation.navigate('Loans')} 
      className='flex-row w-[80vw] h-[20vh] justify-center items-center bg-p-2 shadow-lg rounded-lg'>
        <Text className='text-secondary text-2xl'>
          {userData.user.credits} crd
        </Text>
      </Pressable>

      <View className='flex-col w-[80vw] h-[30vh] justify-center  items-center bg-p-1 shadow-lg rounded-lg'>
        <View className='flex-row w-full h-[10vh] justify-center items-center ' >
          <Image className='rounded-full w-14 h-14' 
           source={require('../../../assets/imgs/space-ship.png')}/>
          <Text className='text-secondary text-2xl'>{userData.user.shipCount}</Text>
        </View>
        <View className='flex-row w-full h-[10vh] justify-center items-center'>
          <Image className='rounded-full w-14 h-14' 
          source={require('../../../assets/imgs/cartoon.png')}/>
          <Text className='text-secondary text-2xl'>{userData.user.structureCount}</Text>
        </View>
      </View>
    </View>
  )
}
