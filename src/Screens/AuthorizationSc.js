import React,{useState} from 'react'
import { View,StyleSheet,TextInput } from 'react-native'
import { useTheme,ActivityIndicator } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// Style
import GeneralStyles from '../Styles/GeneralStyles'
// Icons 
import ChevronRight from '../Assets/SvgIconsComponents/ChevronRight'
// Components
import Header from '../Components/Header';
import Title from '../Fonts/Title';
import Content from '../Fonts/Content';
import Iconic from '../Fonts/Iconic';
// Methods

const UserData = {
    Aboutme:null,
    Name:null,
    ProfilePhoto:null,
}

export default function AuthorizationSc() {
    const {colors} = useTheme()
    const [textInputValue, settextInputValue] = useState("")
    const [loading, setLoading] = useState(false)

    const SignIn = (Number) => {
        return auth().signInWithEmailAndPassword(`${Number}@gmail.com`,`${Number}`)
    }

    const CreateCollection = async(UserId,Number) => {
        try {
            await firestore().collection('Users').doc(UserId).set({...UserData,Number:Number})
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const CreateAccount = async(Number) => {
        try {
            const User = await auth().createUserWithEmailAndPassword(`${Number}@gmail.com`,`${Number}`)
            const UserId = User.user.uid
            CreateCollection(UserId,Number)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const Continue = async() => {
        if(isContinue){
            setLoading(true)
            try {
                await SignIn(textInputValue)
                setLoading(false)
            } catch (error) {
                console.log(error);
                if(error.code=="auth/user-not-found"){
                    CreateAccount(textInputValue)
                }
            }
        }
    }

    const isContinue = textInputValue.length>=10
    const ContinueButtonColor = isContinue?colors.primary:colors.disable
    
    const HeaderCenterTitle = () => <Title>Telefon numarası</Title>
    const HeaderRightTitle = () => loading?<ActivityIndicator color={colors.primary}/>:<Title style={{color:ContinueButtonColor}}>Devam</Title>

    return (
        <View style={[GeneralStyles.container,{backgroundColor:colors.surface}]}>
            <Header 
            center={{content:<HeaderCenterTitle/>}}
            right={{content:<HeaderRightTitle/>,onPress:Continue}}
            />
            <Content style={{...styles.content}}>
                Lütfen ülke kodunuzu onaylayın ve telefon numaranızı girin
            </Content>
            <View style={[styles.formArea]}>
                <View style={[styles.countrySelection,{borderColor:colors.border}]}> 
                    <Title style={{...styles.countryTitle,color:colors.primary}}>Türkiye</Title>
                    <ChevronRight color={colors.disabled}/>
                </View>
                <View style={[styles.inputArea,{borderColor:colors.border}]}>
                    <Iconic style={{marginHorizontal:16}}>+90</Iconic>
                    <TextInput
                    maxFontSizeMultiplier={1}
                    keyboardType="number-pad"
                    style={[styles.textInput,{borderColor:colors.border}]}
                    maxLength={10}
                    value={textInputValue}
                    onChangeText={t => settextInputValue(t)}
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    content:{
        padding:28,
        textAlign:"center"
    },
    formArea:{
        paddingTop:18,
        paddingLeft:18,
    },
    countrySelection:{
        paddingRight:18,
        paddingVertical:16,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:0.7,
        borderTopWidth:0.7,
    },
    countryTitle:{
        fontWeight:"400"
    },
    inputArea:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:0.7,
        paddingVertical:8
    },
    textInput:{
        flex:1,
        fontSize:27,
        borderLeftWidth:0.7,
        paddingLeft:8
    }
})