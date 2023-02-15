import { TextInput, Text, View} from "react-native"

type InputTextProps = {
    username:string, 
    setUsername: (str:string)=> void,
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



export const InputText = ({username, setUsername, errorMsg, setErrorMsg}:InputTextProps)=> {

    const handleCheckInputs = (username:string)=> {
        const regex = /^[a-zA-Z0-9_@]{0,30}/
        const itPass = regex.test(username)
        
        if(username.length === 0 || username.trim() === ""){
            setUsername(username)
            return setErrorMsg("This camp cannot be empty")
        }

        if(!itPass){
            setUsername(username)
            return setErrorMsg("This camp contains no valid characters, valid characters : a-Z 0-9 _ @")
        }

        if(errorMsg !== ""){
            setErrorMsg("")
        }
    
        setUsername(username)
    }

    return(
        <View>
            <TextInput 
            className={`w-[75vw] py-2  shadow-md bg-p-2 text-lg text-textp  rounded-lg ${errorMsg !== "" ? 'border-2 border-warning' : 'border-2 border-secondary'  }`} 
            onChangeText={(value)=> handleCheckInputs(value)} 
            value={username}/>
            {errorMsg !== '' ? <ErrorText errorMsg={errorMsg}/> :null}
         </View>
    )
}