import { useContext } from "react"
import { ImageBackground, View, Text, Pressable } from "react-native"
import { appContextDefault, appContextDefaultValue, userContextDefaultValue } from "../../constants"
import { AppContext, UserContext } from "../../context"
import { deleteAll } from "../../storage/storage"
import { ScreenProps } from "../../types"

export const LogoutScreen = (props: ScreenProps<"Logout">)=> {
    const {route, navigation} = props
    const {data, set} = useContext(AppContext)
    const {userData, setUserData} =  useContext(UserContext)

    const handleLogout = async ()=> {
        const user = data.currentUser!
        const deletedUser = await deleteAll(user)
        if(deletedUser){
            set(appContextDefaultValue)
            setUserData(userContextDefaultValue)
            navigation.navigate("Auth")
        }
        

    }

    return(
        <View className="flex-1">
             <ImageBackground source={require('../../../assets/imgs/logout.jpg')} blurRadius={6} className='flex-1 justify-evenly items-center'>
                <View className="flex-2">
                    <Text className='text-4xl text-secondary mb-5 font-bold mt-20'> Goodbye  </Text>
                    <Text className='text-4xl text-secondary mb-5 font-bold'> Space Adventurer </Text>
                </View>
                <View className="flex-2">
                    <Pressable
                    className='flex w-[40vw] h-[8vh] rounded-lg  justify-center bg-secondary mb-10 shadow-md mt-5' 
                    onPress={()=> handleLogout()}>
                        <Text
                        className={`text-primary text-3xl text-center`}
                        > Logout </Text>
                    </Pressable>
                </View>
                
             </ImageBackground>
        </View>
    )
}