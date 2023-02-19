import { useContext, useEffect, useState } from "react"
import { View, Text } from "react-native"
import { getShips } from "../../api/spaceTraders"
import { AppContext, UserContext } from "../../context"
import { SystemShip, SystemShips } from "../../types/apiResponse.types"
import { ShipList } from "./components"

export const ShipsScreen = ()=> {
    const {data, set} = useContext(AppContext)
    const {userData, setUserData} = useContext(UserContext)
    const [ships,setShips] = useState<SystemShip[] | undefined>(undefined)

    const handleInit = async()=>{
        const token = data.userToken!
        const ships:SystemShips | undefined  = await getShips(token)
        if(ships !== undefined){
            setShips(ships.shipListings)
        }
        
    }

    useEffect(()=>{
        handleInit()
    },[])

    return(
        <View className="w-[100vw] h-[100vh] bg-p-4 items-center ">
            <Text className="w-full font-bold text-3xl text-secondary text-center mt-10"> SHIPS </Text>
            {ships === undefined 
                ? <Text className="w-full font-bold text-3xl text-secondary text-center mt-10"> LOADING... </Text> 
                :<ShipList ships={ships}/>}

        </View>
    )
}