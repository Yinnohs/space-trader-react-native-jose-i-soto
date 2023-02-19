import { FC, ReactElement, useEffect } from "react"
import { Image } from "react-native"

const images:Record<string,ReactElement> = {
    ship0:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship0.png')}/>,
    ship1:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship1.png')}/>,
    ship2:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship2.png')}/>,
    ship3:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship3.png')}/>,
    ship4:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship4.png')}/>,
    ship5:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship5.png')}/>,
    ship6:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship6.png')}/>,
    ship7:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship7.png')}/>,
    ship8:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship8.png')}/>,
    ship9:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship9.png')}/>,
    ship10:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship10.png')}/>,
    ship11:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship11.png')}/>,
    ship12:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship12.png')}/>,
    ship13:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship13.png')}/>,
    ship14:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship14.png')}/>,
    ship15:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship15.png')}/>,
    ship16:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship16.png')}/>,
    ship17:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship17.png')}/>,
    ship18:<Image className="w-20 h-20 rounded-md shadow-sm bg-p-2" source={require('../../../../assets/imgs/ships/ship18.png')}/>,
}

export const ShipImage: FC<{src:string}> = ({src})=>{
    return(
        <>
            {
                images[src]
            }
        </>
    )
}