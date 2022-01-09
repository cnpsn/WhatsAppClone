import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignOut from '../Methods/SignOut'

export default function Settings() {
    return (
        <View style={[styles.container]}>
            <Text onPress={SignOut} style={{fontSize:100,fontWeight:"bold"}}>Çık</Text>
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