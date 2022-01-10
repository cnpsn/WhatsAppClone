import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GlobalContext } from '../Contexts/GlobalContext'
import { useTheme } from 'react-native-paper';
import moment from 'moment';
require('moment/locale/tr.js');

import Read from '../Assets/SvgIconsComponents/Read'

export default function ChatBubble(props) {
    const { colors } = useTheme()
    const { user } = useContext(GlobalContext)
    const { CreatedAt, UserId } = props.Elements

    const ConvertCreateAt = moment(CreatedAt.toDate()).format('LT')

    if(user.uid==UserId){
        return(
            <View style={[styles.leftBubble,{backgroundColor: colors.WpYellow}]} key={props.index}>
                <Text style={{ fontSize: 16, color: "#000", }} key={props.index}> {props.Elements.Text}</Text>
                <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                    <Text maxFontSizeMultiplier={1} style={{fontSize:11,color:colors.gray,marginHorizontal:4}}>{ConvertCreateAt}</Text>
                    <Read width={13} height={13}/>
                </View>
            </View>
        )
    }else{
        return (
            <View>
                <View style={[styles.rightBubble,{backgroundColor:colors.lightGray}]} key={props.index}>
                    <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }} key={props.index}> {props.Elements.Text}</Text>
                    <Text maxFontSizeMultiplier={1} style={{textAlign:"right",fontSize:11,color:colors.gray,marginHorizontal:4}}>{ConvertCreateAt}</Text>
                </View>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    rightArrow: {
        position: "absolute",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },

    rightArrowOverlap: {
        position: "absolute",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20

    },
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "#eeeeee",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    },
    leftBubble:{
        padding: 10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    rightBubble:{
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    }
})