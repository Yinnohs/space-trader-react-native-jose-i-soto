import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC, useEffect, useState } from 'react'
import {View,Text, StyleSheet, Pressable} from 'react-native'
import { StackRoutes } from '../types/screens.types';

type Props = NativeStackScreenProps<StackRoutes, "Home">;


export const HomeScreen = (props: Props) => {
  const {route, navigation} = props
  
  return (
    <View className='flex-1 items-center justify-center bg-back' >
        <Text className='text-white w-[100vw] h-[10vh] text-center text-3xl mt-10'>Please Select One</Text>
        <View className='flex-col w-[85vw] h-[60vh] rounded-md bg-third shadow-lg items-center justify-center'>
          <Pressable onPress={()=> navigation.navigate("Login")}
          className='flex w-[40vw] h-[10vh] rounded-lg  justify-center bg-secondary mb-10 shadow-md'>
            <Text className='text-2xl text-center text-third'>login</Text>
            </Pressable>
          <Pressable  onPress={()=> navigation.navigate("Register")}
          className='flex w-[40vw] h-[10vh] rounded-lg  justify-center bg-third mb-10 shadow-md'>
            <Text className='text-2xl text-center text-secondary'>Register</Text> 
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#181818'
    },
    font:{
        color:'#fafafa'
    }
})
