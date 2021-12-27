import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper';

import SignOut from '../Methods/SignOut'

import Shape from '../Assets/SvgIconsComponents/Shape'

export default function ChatsSc() {
    const {colors} = useTheme()

    const Exit = () => SignOut()

    return (
        <View style={[styles.container]}>
            <Text onPress={Exit} style={{fontSize:44,fontWeight:"bold"}}>
                Çıkış yap
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})