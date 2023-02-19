import { FC, memo, useContext, useEffect, useState } from "react"
import { FlatList, ImageSourcePropType, View } from "react-native"
import { getShipTypes } from "../../../api/spaceTraders"
import { AppContext } from "../../../context"
import { SystemShip } from "../../../types/apiResponse.types"
import { ShipElement } from "./ShipElement"
import { shipsImages } from '../ships.utils'
type RenderShip = SystemShip
type RenderShipList = {ships:RenderShip[]}

export const ShipList:FC<RenderShipList> = ({ships})=>{
    const {data, set} = useContext(AppContext)
    const [switchType, setSwitchType] = useState<Record<string,string> | undefined>(undefined)

    const getShipSrc = async()=>{
        const token = data.userToken!
        const types = await getShipTypes(token) as string[]
        const typeSwitch:Record<string,string> = {}
        let counter = 0
        if(types.length!== 0){
            types.forEach((type:string,)=>{
                if(!(type  in typeSwitch)){
                    typeSwitch[type] = shipsImages[`ship${counter}`]
                    counter ++;
                }
            })
            setSwitchType(typeSwitch)
        }
    }

    useEffect(()=>{
        getShipSrc()
    },[])

    return(
        <View className="bg-p-2 h-[80vh] w-[95vw] rounded-lg">
            {
                switchType=== undefined 
                ?<></>
                :<FlatList contentContainerStyle={{alignItems:"center", marginTop:40, marginBottom:20 }} data={ships} renderItem={({item,index})=> <ShipElement
                class={item.class}
                loadingSpeed={item.loadingSpeed}
                manufacturer={item.manufacturer}
                maxCargo={item.maxCargo}
                plating={item.plating}
                puracheLocation={item.puracheLocation}
                speed = {item.speed}
                src={switchType[item.type]}
                type={item.type}
                weapons={item.weapons}
                key={index}
            />}/>
            }
        
        </View>
    )
}

export const MemoiShipList = memo(ShipList)