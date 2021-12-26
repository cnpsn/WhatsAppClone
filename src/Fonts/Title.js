import React from 'react'
import { Text,StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper';

export default function Title(props) {
    const {colors} = useTheme()
    const {children,style} = props
    return <Text maxFontSizeMultiplier={1} numberOfLines={1} 
    style={[styles.font,{color:colors.black,...style}]}>{children}</Text>
}
const styles = StyleSheet.create({
    font:{
        fontWeight:"600",
        fontSize:17
    }
})