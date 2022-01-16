import React,{useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignOut from '../Methods/SignOut'
import { GlobalContext } from '../Contexts/GlobalContext'

export default function Settings() {
    const context = useContext(GlobalContext)

    return (
        <View style={[styles.container]}>
            <Text onPress={SignOut} style={{fontSize:44,fontWeight:"bold"}}>Çık</Text>
            <Text style={{fontSize:44,fontWeight:"bold",marginVertical:20}} > {context.userInformation.Number} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})