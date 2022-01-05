import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { useTheme } from 'react-native-paper';
import ChevronRight from '../Assets/SvgIconsComponents/ChevronRight'

import Title from '../Fonts/Title';
import Content from '../Fonts/Content';
import SubTitle from '../Fonts/SubTitle'

export default function ChatsCard(props) {
    const {LastMessage,UserName,UserPhoto,UserId} = props.Elements
    const {colors} = useTheme()

    return (
        <View style={[styles.cardContainer]}>
            <View style={[styles.leftView]}>
                <Image source={{uri:UserPhoto}} style={[styles.photo]}/>
            </View>
            <View style={[styles.rightView,{borderColor:colors.border}]}>
                <View style={[styles.centerView]}>
                    <View style={[styles.centerTop]}>
                        <Title>{UserName}</Title>
                        <Content style={{color:colors.gray,fontSize:14}}>11/16/19</Content>
                    </View>
                    <View>
                        <SubTitle style={{color:colors.gray,fontSize:14}}>
                            {LastMessage}
                        </SubTitle>
                    </View>
                </View>
                <View style={[styles.iconView]}>
                    <ChevronRight color={colors.disabled}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row",
    },
    photo:{
        width:52,
        height:52,
        borderRadius:26,
    },
    leftView:{
        justifyContent:"center",
        padding:16,
    },
    centerView:{
        flex:1,
    },
    rightView:{
        flex:1,
        flexDirection:"row",
        borderBottomWidth:0.5,
    },
    iconView:{
        justifyContent:"center",
        padding:16
    },
    centerTop:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:8
    },
    centerBottom:{

    }
})