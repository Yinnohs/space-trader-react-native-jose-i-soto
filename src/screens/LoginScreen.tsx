import {View,Text, Pressable, TextInput} from 'react-native'

export const LoginScreen = () => {
  return (
    <View className='flex-1 bg-back  items-center'>
      <Text className='text-3xl text-textp my-10'> Please Introduce your Token </Text>
      <View className='flex-col w-[90vw] h-[50vh] rounded-md bg-primary shadow-lg items-center justify-center'>
        <Text className='text-2xl text-textp mb-10' >Token</Text>
        <TextInput className='w-[75vw] py-2  shadow-md bg-third text-lg text-textp'/>
        <Pressable className='flex-col mt-10 w-40 h-20 rounded-lg border-2 border-primary  shadow-md bg-third text-lg text-textp justify-center items-center'>
          <Text className='text-textp text-xl'>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}