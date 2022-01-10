import React from 'react'
import { View,SafeAreaView,StyleSheet,TextInput,TouchableOpacity,Platform,InputAccessoryView} from 'react-native'
import { useTheme } from 'react-native-paper';

// ICONS 
import Add from '../Assets/SvgIconsComponents/Add'
import Stickers from '../Assets/SvgIconsComponents/Stickers'
import RecordAudio from '../Assets/SvgIconsComponents/RecordAudio'
import Camera from '../Assets/SvgIconsComponents/Camera'
import Send from '../Assets/SvgIconsComponents/Send'

export default function TextInputView(props) {
    const {colors} = useTheme()
    const {TextOnChange,textInputValue,SendPress} = props.Elements
    
    const sendIconIsVisible = textInputValue!=""

    const CustomizedComponent = Platform.select({
        ios: InputAccessoryView,
        android: View
    });

    return (
        <SafeAreaView style={{backgroundColor:colors.lightGray}}>
            <CustomizedComponent>
            <View style={[styles.container]}>
                <View style={[styles.leftContainer]}>
                    <View style={[styles.iconContainer]}>
                        <Add width={22} height={22}/>
                    </View>
                </View>
                <View style={[styles.centerContainer]}>
                    <View style={[styles.textInputContainer,{borderColor:colors.gray,backgroundColor:colors.surface}]}>
                        <TextInput 
                        multiline={true}
                        style={[styles.textInput]}
                        value={textInputValue}
                        onChangeText={text => TextOnChange(text)}
                        />
                        <View style={{justifyContent:"flex-end"}}>
                            <Stickers width={21} height={21} />
                        </View>
                    </View>
                </View>          
                <View style={[styles.rightContainer]}>
                    <View style={[styles.iconContainer,{display:sendIconIsVisible?"none":"flex"}]}>
                        <Camera width={24} height={24} />
                    </View>
                    <View style={[styles.iconContainer,{display:sendIconIsVisible?"none":"flex"}]}>
                        <RecordAudio width={22} height={22} />
                    </View>
                    <TouchableOpacity onPress={SendPress} style={[styles.sendIconContainer,{backgroundColor:colors.primary,display:sendIconIsVisible?"flex":"none"}]}>
                        <Send color={colors.surface}/>
                    </TouchableOpacity>
                </View>          
            </View>
            </CustomizedComponent>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        paddingVertical:8,
        maxHeight:240,
    },
    leftContainer:{
        justifyContent:"flex-end"
    },
    centerContainer:{
        flex:1,
        justifyContent:"center"
    },
    rightContainer:{
        flexDirection:"row",
        alignItems:"flex-end"
    },
    iconContainer:{
        padding:8,
    },
    textInputContainer:{
        borderRadius:16,
        borderWidth:0.5,
        flexDirection:"row",
        padding:8
    },
    textInput:{
        flex:1,
    },
    sendIconContainer:{
        width:40,
        height:40,
        borderRadius:20,
        marginHorizontal:8,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})