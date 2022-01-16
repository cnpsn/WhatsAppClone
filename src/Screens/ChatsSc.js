import React,{useEffect,useState,useContext} from 'react'
import { View, StyleSheet, FlatList,Text, Alert } from 'react-native'
import { useTheme, Button, Dialog, Portal,TextInput} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {GlobalContext} from '../Contexts/GlobalContext'
import { ChatContex } from '../Contexts/ChatContex';
// Components
import Header from '../Components/Header';
import ChatsCard from '../Components/ChatsCard';
import Title from '../Fonts/Title';
// Icons
import Edit from '../Assets/SvgIconsComponents/Edit'
// Style
import GeneralStyles from '../Styles/GeneralStyles';

export default function ChatsSc(props) {
    const {colors} = useTheme()
    const [modalVisible, setmodalVisible] = useState(false)
    const [textInputValue, settextInputValue] = useState("+90")
    const [DATA, setDATA] = useState([])
    const {user} = useContext(GlobalContext)
    const {setDetailsOfSelectedChat} = useContext(ChatContex)
    const UserID = user.uid

    const CheckUserToChat = async(Number) => {
        hideDialog()
        const editNumber = Number.slice(3)
        try {
            const Result = await firestore().collection('Users').where('Number', '==', editNumber).get()
            if(!Result.empty){
                Result.forEach(doc => {
                    setDetailsOfSelectedChat({...doc.data(),UserId:doc.id})
                    props.navigation.navigate("ChatSc")
                })
            }else{
                Alert.alert("Sorun","Böyle bir kullanıcı bulunamadı !")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const hideDialog = () => {
        setmodalVisible(false)
        settextInputValue("+90")
    };

    const Continue = () => {
        CheckUserToChat(textInputValue)
    }

    const TextOnChange = text => {
        if(text.substring(0,3)=="+90"&&(text[3]!="0")){
            settextInputValue(text)
        }
    }

    const GetChats = async() => {
        try {
            const Chats = await firestore().collection('Chats').where('Users', 'array-contains', UserID).get()
            const HelperArray = [];
            Chats.forEach(documentSnapshot => {
                const {Messages,UsersInformation} = documentSnapshot.data()
                const {Name,ProfilePhoto,UserId,Number,IsWriting} = UsersInformation.find(el => el.UserId!=UserID)
                const {id} = documentSnapshot
                const LastMessage = Messages[Messages.length-1]?.Text
                const LastMessageDate = Messages[Messages.length-1]?.CreatedAt
                const LastMessageUserId = Messages[Messages.length-1]?.UserId
                HelperArray.push({
                    Number,
                    Name,
                    ProfilePhoto,
                    UserId,
                    LastMessage,
                    LastMessageDate,
                    LastMessageUserId,
                    DocumentId:id,
                    IsWriting:IsWriting,
                    UsersInformationOfTheDocument:UsersInformation
                })
            })
            setDATA(HelperArray)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        const subscriber = firestore()
          .collection("Chats")
          .where('Users', 'array-contains', UserID)
          .onSnapshot(() => GetChats());
        return () => subscriber();
    }, []);

    return (
        <View style={[GeneralStyles.container,{backgroundColor:colors.surface}]}>
            <Portal>
                <Dialog style={{padding:18,borderRadius:16}} visible={modalVisible} onDismiss={hideDialog}>
                    <TextInput
                    style={[styles.textInput,{backgroundColor:colors.surface}]}
                    mode="flat"
                    label="Numara"
                    value={textInputValue}
                    onChangeText={TextOnChange}
                    keyboardType="number-pad"
                    maxLength={13}
                    />
                    <Dialog.Actions>
                    <Button onPress={hideDialog}>İptal</Button>
                    <Button onPress={Continue}>Devam et</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <Header 
            left={{content:<Title style={{color:colors.primary}}>Düzenle</Title>}}
            center={{content:<Title>Sohbetler</Title>}}
            right={{content:<Edit/>,onPress:() => setmodalVisible(true)}}
            />
            <View style={[styles.body]}>
                <FlatList 
                data={DATA}
                renderItem={({item}) => <ChatsCard Elements={item}/>}
                keyExtractor={(item,key) => key}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    textInput:{
        fontSize:28,
        fontWeight:"500"
    }
})