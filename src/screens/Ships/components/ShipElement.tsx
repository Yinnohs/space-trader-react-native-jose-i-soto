import { FC, useEffect, useState } from "react";
import { View, Image,Text, ImageSourcePropType} from "react-native";
import { SystemShip } from "../../../types/apiResponse.types";
import { ShipImage } from "./ShipImage";



export const ShipElement:FC<SystemShip & {src:string}> = ({type, speed, weapons, maxCargo, loadingSpeed, manufacturer, plating, puracheLocation, src})=> {
    return(
        <View className="flex-row w-80 h-60 rounded-lg justify-evenly items-center bg-p-1 gap-1 shadow-lg mb-10">
            <Text className='text-2xl text-center text-secondary absolute -top-4 -left-1 bg-p-3 font-bold p-1'>{type}</Text>
            <View className="flex-col w-30 h-60 justify-center items-center ">
                <ShipImage src={src}/>
            </View>

            <View className="flex-col w-30 h-60 justify-evenly items-center ">

                <View className="w-full h-10 flex-row justify-start items-center gap-2">
                    <Text className='text-2xl text-center text-secondary font-bold'>Speed:</Text>
                    <Text className='text-2xl text-center text-secondary'>{speed}</Text>
                </View>

                <View className="w-full h-10 flex-row justify-start items-center gap-2">
                    <Text className='text-2xl text-center text-secondary font-bold'>Weapons:</Text>
                    <Text className='text-2xl text-center text-secondary'>{weapons}</Text>
                </View>

                <View className="w-full h-10 flex-row justify-start items-center gap-2">
                    <Text className='text-2xl text-center text-secondary font-bold'>Max Cargo:</Text>
                    <Text className='text-2xl text-center text-secondary'>{maxCargo}</Text>
                </View>
            </View>

        </View>
    )
}