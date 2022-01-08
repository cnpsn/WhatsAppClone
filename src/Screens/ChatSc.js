import React,{useContext,useState} from 'react'
import { View,StyleSheet, ScrollView,Dimensions,Image} from 'react-native'
import GeneralStyles from '../Styles/GeneralStyles';
import { useTheme } from 'react-native-paper';
import { ChatContex } from '../Contexts/ChatContex';

import ChatHeader from '../Components/ChatHeader';
import TextInputView from '../Components/TextInputView';
import Rectangle from '../Assets/SvgIconsComponents/Rectangle'

const {width,height} = Dimensions.get('window')

export default function ChatSc(props) {
    const {DetailsOfSelectedChat} = useContext(ChatContex)
    const {UserId,UserPhoto,UserName} = DetailsOfSelectedChat
    const [textInputValue, settextInputValue] = useState("")
    const {colors} = useTheme()

    const TextOnChange = text => settextInputValue(text)

    return (
        <View style={[GeneralStyles.container,{backgroundColor:colors.surface}]}>
            <ChatHeader/>
            <View style={[styles.center]}>
                <Image 
                style={{width:"100%",height:"100%",position:"absolute"}}
                source={require('../Assets/PngIcons/Rectangle.png')}
                />
            </View>
            <TextInputView TextOnChange={TextOnChange} textInputValue={textInputValue}/>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        height:44
    },
    center:{
        flex:1,
    },
})