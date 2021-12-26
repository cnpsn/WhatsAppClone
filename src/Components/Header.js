import React from 'react'
import { View,StyleSheet,SafeAreaView,Dimensions, TouchableOpacity} from 'react-native'
import { useTheme } from 'react-native-paper';

const {width} = Dimensions.get('window');

export default function Header(props) {
    const {colors} = useTheme()
    const {left,center,right} = props
    return (
        <SafeAreaView style={{backgroundColor:colors.background}}>
            <View style={[styles.container,{backgroundColor:colors.background}]}>
                <TouchableOpacity onPress={left&&left.onPress} style={[styles.leftView]}>{left&&left.content}</TouchableOpacity >
                <TouchableOpacity style={[styles.centerView]}>{center&&center.content}</TouchableOpacity>
                <TouchableOpacity onPress={right&&right.onPress} style={[styles.rightView]}>{right&&right.content}</TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        height:44,
        flexDirection:"row",
    },
    leftView:{
        minWidth:width/3,
        justifyContent:"center",
        alignItems:"flex-start",
        paddingLeft:16,
    },
    centerView:{
        minWidth:width/3,
        justifyContent:"center",
        alignItems:"center",
    },
    rightView:{
        minWidth:width/3,
        justifyContent:"center",
        alignItems:"flex-end",
        paddingRight:16
    }
})