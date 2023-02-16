
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext, useEffect, useState } from 'react';
import {View,Text, Image} from 'react-native'
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
  }, [])
  
  return (
    <View className='flex-1 items-center justify-center bg-p-5' >
      <View className='flex-1'>
        <Image source={require('../../../assets/imgs/user.png')}></Image>
      </View>
      <View className='flex-1'>

      </View>
      <View className='flex-1'>

      </View>
    </View>
  )
}
