import {View,Text, StyleSheet} from 'react-native'

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.font}> Hola  Estamos en la profile Page! </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#181818'
    },
    font:{
        color:'#fafafa'
    }
})