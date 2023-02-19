import { useContext, useEffect, useState } from "react"
import { View, Text } from "react-native"
import { getLoans } from "../../api/spaceTraders"
import { AppContext, UserContext } from "../../context"
import { LoansApiResponse } from "../../types"
import { LoanList } from "./components"

export const LoansScreen = ()=> {
    const {data, set} = useContext(AppContext)
    const {userData,setUserData} = useContext(UserContext)
    const [loans, setLoans] = useState<LoansApiResponse | undefined >(undefined)
    const handleLoanInit =  async()=>{
        const token = data.userToken!
        const currentLoans = await getLoans(token)
        setLoans(currentLoans)
    }


    useEffect(()=>{
        handleLoanInit()
    },[userData])

    return(
        <View className="w-[100vw] h-[100vh] bg-p-4 items-center ">
            <Text className="w-full font-bold text-3xl text-secondary text-center mt-10"> LOANS </Text>
            {loans === undefined 
                ? <Text className="w-full font-bold text-3xl text-secondary text-center mt-10"> LOADING... </Text> 
                :<LoanList loans={loans.loans}/>}
        </View>
    )
}