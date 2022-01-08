import React,{useContext} from 'react'
import { View,StyleSheet,Image} from 'react-native'
import ChevronRight from '../Assets/SvgIconsComponents/ChevronRight'
import { useTheme,TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ChatContex } from '../Contexts/ChatContex';
import moment from 'moment';

import Title from '../Fonts/Title';
import Content from '../Fonts/Content';
import SubTitle from '../Fonts/SubTitle'

export default function ChatsCard(props) {
    const {LastMessage,UserName,UserPhoto,LastMessageDate} = props.Elements
    const ConvertData = moment(LastMessageDate.toDate()).format("l")
    const {setDetailsOfSelectedChat} = useContext(ChatContex)
    const {colors} = useTheme()
    const navigation = useNavigation();

    const GoToChat = () => {
        setDetailsOfSelectedChat({...props.Elements})
        navigation.navigate("ChatSc")
    }

    return (
        <TouchableRipple onPress={GoToChat} style={[styles.cardContainer]}>
            <>
            <View style={[styles.leftView]}>
                <Image source={{uri:UserPhoto}} style={[styles.photo]}/>
            </View>
            <View style={[styles.rightView,{borderColor:colors.border}]}>
                <View style={[styles.centerView]}>
                    <View style={[styles.centerTop]}>
                        <Title>{UserName}</Title>
                        <Content style={{color:colors.gray,fontSize:14}}>{ConvertData}</Content>
                    </View>
                    <View style={[styles.centerBottom]}>
                        <SubTitle style={{color:colors.gray,fontSize:14}}>
                            {LastMessage}
                        </SubTitle>
                    </View>
                </View>
                <View style={[styles.iconView]}>
                    <ChevronRight color={colors.disabled}/>
                </View>
            </View>
            </>
        </TouchableRipple>
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
        paddingHorizontal:16,
        paddingVertical:8
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
        paddingHorizontal:16,
        paddingVertical:8
    },
    centerTop:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:8
    },
    centerBottom:{
        justifyContent:"center",
    }
})