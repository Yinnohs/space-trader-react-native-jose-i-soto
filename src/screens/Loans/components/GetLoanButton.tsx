import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FC, useContext } from "react";
import { Alert, Pressable, Text } from "react-native";
import { redeemLoan } from "../../../api/spaceTraders";
import { AppContext, UserContext } from "../../../context";
import { Loans } from "../../../types";

export const GetLoanButton: FC<{type:string}> = ({type})=> {
    const {setUserData, userData} = useContext(UserContext)
    const {data, set}  = useContext(AppContext)
    const navigation = useNavigation<any>()
    const handleNavigation = ()=> {
        navigation.navigate('Home')
    }
    const handleTakeLoan = async()=>{
        const token = data.userToken!
        const redeemedLoan:{
            credits: number
            loans:Loans
        } = await redeemLoan(token, type)


        if("credits" in redeemedLoan){
            setUserData({ user:{
                ...userData.user,
                credits: userData.user.credits + redeemedLoan.credits
            }})
    
        }else{
            Alert.alert("You can only reedem one Loan")
        }

        
        handleNavigation()

    }

    return(

        <Pressable className='flex w-[40vw] h-[4vh] rounded-lg  justify-center bg-secondary mb-10 shadow-md'
         onPress={handleTakeLoan}>     
                  <Text className='text-2xl text-center text-p-2'>Get Loan</Text>
        </Pressable>
    )

}