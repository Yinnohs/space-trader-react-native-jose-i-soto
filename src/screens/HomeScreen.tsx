
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext, useEffect } from 'react';
import {View,Text, Pressable} from 'react-native'
import { UserContext } from '../context';
import { getUsers } from '../storage';
import { StackRoutes } from '../types/screens.types';

type Props = NativeStackScreenProps<StackRoutes, "Home">;


export const HomeScreen = (props: Props) => {
  const {route, navigation} = props
  const {data,set} = useContext(UserContext)

  const handleInitialHomeSetup= async ()=> {
    const users = await getUsers()
    set({...data, users: users})
  }


  useEffect(()=>{
    handleInitialHomeSetup()
  }, [])
  
  return (
    <View className='flex-1 items-center justify-center bg-back' >
    </View>
  )
}
