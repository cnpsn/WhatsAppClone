import React,{useContext,useState,useEffect} from 'react'
import { View,StyleSheet,Image,FlatList,Platform,KeyboardAvoidingView} from 'react-native'
import GeneralStyles from '../Styles/GeneralStyles';
import { useTheme } from 'react-native-paper';
import { ChatContex } from '../Contexts/ChatContex';
import { GlobalContext } from '../Contexts/GlobalContext';
import firestore from '@react-native-firebase/firestore';
import ImageView from "react-native-image-viewing";

import ChatHeader from '../Components/ChatHeader';
import TextInputView from '../Components/TextInputView';
import ChatBubble from '../Components/ChatBubble';

export default function ChatSc() {
    const {colors} = useTheme()
    const {DetailsOfSelectedChat,setDetailsOfSelectedChat} = useContext(ChatContex)
    const {user,userInformation} = useContext(GlobalContext)
    const {ProfilePhoto,DocumentId,UserId,Name,Number,UsersInformationOfTheDocument} = DetailsOfSelectedChat
    const [textInputValue, settextInputValue] = useState("")
    const [imageVisible, setimageVisible] = useState(false)
    const [images, setimages] = useState([])
    const [Messages, setMessages] = useState([])

    const ChangeIsWriting = async(value) => {
        const HelperArray = [...UsersInformationOfTheDocument]
        const Element = HelperArray.find(el => el.UserId==user.uid)
        Element.IsWriting = value
        try {
            await firestore().doc("Chats/" + DocumentId).set({UsersInformation:HelperArray},{merge:true})
        } catch (error) {
            console.log(error);
        }
    }

    const CreateNewChat = async(UpdatedMessages) => {
        const HelperUserInformation = [
            {UserId:user.uid,Name:userInformation.Name,ProfilePhoto:userInformation.ProfilePhoto,Number:userInformation.Number,IsWriting:false},
            {UserId:UserId,Name:Name||null,ProfilePhoto:ProfilePhoto||null,Number:Number,IsWriting:false},
        ]
        const HelperObject = {
            Users:[UserId,user.uid],
            UsersInformation:HelperUserInformation,
            Messages:UpdatedMessages
        }
        const Result = await firestore().collection("Chats").add(HelperObject)
        const DocumentId = Result.id
        setDetailsOfSelectedChat(old => ({...old,DocumentId:DocumentId,UsersInformationOfTheDocument:HelperUserInformation}))
    }

    const TextOnChange = text => {
        settextInputValue(text)
        if(DocumentId){
            if(textInputValue==""&&text!=""){ChangeIsWriting(true)}
            if(textInputValue!=""&&text==""){ChangeIsWriting(false)}
        }
    }

    const ImagePress = () => {
        setimages([{uri:ProfilePhoto}])
        setimageVisible(true)
    }

    const UpdateIsWriting = (documentSnapshot) => {
        const CurrentIsWriting = documentSnapshot.data().UsersInformation.find(el => el.UserId!=user.uid)
        setDetailsOfSelectedChat(old => ({...old,IsWriting:CurrentIsWriting.IsWriting}))
    }

    useEffect(() => {
        const subscriber = firestore()
          .doc("Chats/" + DocumentId)
          .onSnapshot(documentSnapshot => {
            const Result = documentSnapshot.data()?.Messages??[]
            setMessages(Result)
            if(DocumentId){
                UpdateIsWriting(documentSnapshot)
            }
          });
        return () => {
            subscriber()
            ChangeIsWriting(false)
        }
    }, [DocumentId]);

    const UpdateMessages = () => {
        const HelperArray = [...Messages]
        const currentDate = firestore.Timestamp.fromDate(new Date())
        HelperArray.push({
            CreatedAt:currentDate,
            Text:textInputValue,
            UserId:user.uid
        })
        return HelperArray;
    }

    const SendPress = async() => {
        settextInputValue("")
        const UpdatedMessages = UpdateMessages()
        ChangeIsWriting(false)
        try {
            if(DocumentId){
                await firestore().doc("Chats/" + DocumentId).set({Messages:UpdatedMessages},{merge:true})
            }else{CreateNewChat(UpdatedMessages)}
        } catch (error) {
            console.log(error);
        }
    }

    const TextInputElements = {TextOnChange,SendPress,textInputValue}
    const SortMessages = Messages.sort((a,b) =>  b.CreatedAt.toDate()-a.CreatedAt.toDate())

    return (
        <View style={[GeneralStyles.container,{backgroundColor:colors.surface}]}>
            <ImageView
              images={images}
              imageIndex={0}
              visible={imageVisible}
              onRequestClose={() => setimageVisible(false)}
            />
            <ChatHeader ImagePress={ImagePress}/>
            <View style={[styles.center,{}]}>
                <Image 
                style={[styles.image]}
                source={require('../Assets/PngIcons/Rectangle.png')}
                />
                <FlatList
                inverted
                initialNumToRender={7}
                contentContainerStyle={{paddingTop:18}}
                data={SortMessages}
                renderItem={({item,index}) => <ChatBubble Elements={item} index={index}/>}
                />
            </View>
            <KeyboardAvoidingView behavior={Platform.OS=="ios"?"padding":null}>
                <TextInputView Elements={TextInputElements}/>
            </KeyboardAvoidingView>
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
    image:{
        width:"100%",
        height:"100%",
        position:"absolute"
    }
})
