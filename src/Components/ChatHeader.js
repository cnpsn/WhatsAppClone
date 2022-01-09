import React,{useContext} from 'react'
import { View,StyleSheet,SafeAreaView,Image,TouchableOpacity,Text} from 'react-native'
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ChatContex } from '../Contexts/ChatContex';

import VideoCall from '../Assets/SvgIconsComponents/VideoCall'
import Call from '../Assets/SvgIconsComponents/Call'
import Back from '../Assets/SvgIconsComponents/Back'
import Title from '../Fonts/Title';

export default function ChatHeader(props) {
    const {colors} = useTheme()
    const navigation = useNavigation();
    const {DetailsOfSelectedChat} = useContext(ChatContex)
    const {UserPhoto,UserName} = DetailsOfSelectedChat

    const goBack = () => navigation.goBack()

    return (
        <SafeAreaView style={{backgroundColor:colors.lightGray}}>
            <View style={[styles.header,{}]}>
                <TouchableOpacity onPress={goBack} style={[styles.iconContainer]}>
                    <Back/>
                </TouchableOpacity>
                <View style={[styles.centerContainer]}>
                    <TouchableOpacity onPress={props.ImagePress} style={[styles.imageContainer,{}]}>
                        <Image style={[styles.image]} source={{uri:UserPhoto}} />
                    </TouchableOpacity>
                    <View style={{flex:1,justifyContent:"center"}}>
                        <Title>{UserName}</Title>
                        <Text maxFontSizeMultiplier={1} numberOfLines={1} style={[styles.SubTitle,{color:colors.gray}]}>
                            tap here for contact info
                        </Text>
                    </View>
                </View>
                <View style={[styles.rightContainer]}>
                    <View style={[styles.iconContainer]}>
                        <VideoCall width={30} height={30}/>
                    </View>
                    <View style={[styles.iconContainer]}>
                        <Call/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
    },
    centerContainer:{
        flex:1,
        flexDirection:"row"
    },
    rightContainer:{
        flexDirection:"row",
    },
    iconContainer:{
        padding:8,
        justifyContent:"center"
    },
    image:{
        width:36,
        height:36,
        borderRadius:18,
    },
    imageContainer:{
        justifyContent:"center",
        paddingHorizontal:14
    },
    SubTitle:{
        fontSize:12,
    }
})