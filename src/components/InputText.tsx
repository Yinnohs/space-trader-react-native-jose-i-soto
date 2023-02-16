import { TextInput, Text, View} from "react-native"

type InputTextProps = {
    data:string, 
    setData: (str:string)=> void,
    errorMsg : string,
    setErrorMsg: (str:string)=> void,
    label?: string

}

const ErrorText = ({errorMsg}: Pick<InputTextProps, "errorMsg">)=>{
    
    return(
    <>
        <Text
        className="text-lg text-warning"
        >
            {errorMsg}
        </Text>
    </>
    )
}



export const InputText = ({data, setData, errorMsg, setErrorMsg}:InputTextProps)=> {

    const handleCheckInputs = (data:string)=> {
        const regex = /^[a-zA-Z0-9_@-]{0,50}/
        const itPass = regex.test(data)
        
        if(data.length === 0 || data.trim() === ""){
            setData(data)
            return setErrorMsg("This camp cannot be empty")
        }

        if(!itPass){
            setData(data)
            return setErrorMsg("This camp contains no valid characters, valid characters : a-Z 0-9 _ @-")
        }

        if(errorMsg !== ""){
            setErrorMsg("")
        }
    
        setData(data)
    }

    return(
        <View>
            <TextInput 
            className={`w-[75vw] py-2  shadow-md bg-p-2 text-lg text-textp  rounded-lg ${errorMsg !== "" ? 'border-2 border-warning' : 'border-2 border-secondary'  }`} 
            onChangeText={(value)=> handleCheckInputs(value)} 
            value={data}/>
            {errorMsg !== '' ? <ErrorText errorMsg={errorMsg}/> :null}
         </View>
    )
}