import { FC, useContext } from "react"
import { View, Text } from "react-native"
import { UserContext } from "../../../context"
import { Loans } from "../../../types"
import { GetLoanButton } from "./GetLoanButton"


export const Loan : FC<Loans> = ({amount,rate,termInDays,type}) => {
    const {userData, setUserData} = useContext(UserContext)
  return (
    <View className="flex-col w-80 h-80 rounded-lg justify-center items-center bg-p-1 gap-1 shadow-lg mb-10">

    <Text className='w-40 text-2xl text-center text-secondary font-bold absolute -top-1 bg-p-3'>Loan</Text>
      
      <View className="w-full h-10 flex-row justify-start items-center gap-2">
       <Text className='text-2xl text-center text-secondary'> {amount} crd</Text>
      </View>

      <View className="w-full h-10 flex-row justify-start items-center gap-2">
        <Text className='text-2xl text-center text-secondary font-bold'>Rate:</Text>
        <Text className='text-2xl text-center text-secondary'>{rate}</Text>
      </View>

      <View className="w-full h-10 flex-row justify-start items-center gap-2">
        <Text className='text-2xl text-center text-secondary font-bold'>Term:</Text>
        <Text className='text-2xl text-center text-secondary'>{termInDays}</Text>
      </View>
      <View className="w-full h-12 flex-row justify-start items-center gap-2 mb-3">
        <Text className='text-2xl text-center text-secondary font-bold'>Type:</Text>
        <Text className='text-2xl text-center text-secondary'>{type}</Text>
      </View>
        <GetLoanButton type={type}/>
    </View>
  )
}

