import { FC } from "react"
import { FlatList, View } from "react-native"
import { Loans, LoansApiResponse } from "../../../types"
import {Loan} from "./Loan"

export const LoanList :FC<LoansApiResponse>= ({loans})=> {
    return(
        <View className="bg-p-2 h-[60vh] w-[95vw]">
        <FlatList contentContainerStyle={{alignItems:"center", marginTop:40}} data={loans} renderItem={({item,index})=> <Loan 
            amount={item.amount}  
            collateralRequired={item.collateralRequired}
            rate ={item.rate}
            termInDays={item.termInDays}
            type ={item.type}
            key={index}
        />}/>
        </View>
    )
}