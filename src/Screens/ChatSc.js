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
    const {ProfilePhoto,DocumentId,UserId,Name,Number} = DetailsOfSelectedChat
    const [textInputValue, settextInputValue] = useState("")
    const [imageVisible, setimageVisible] = useState(false)
    const [images, setimages] = useState([])
    const [Messages, setMessages] = useState([])

    const TextOnChange = text => settextInputValue(text)

    const ImagePress = () => {
        setimages([{uri:ProfilePhoto}])
        setimageVisible(true)
    }

    useEffect(() => {
        const subscriber = firestore()
          .doc("Chats/" + DocumentId)
          .onSnapshot(documentSnapshot => {
            const Result = documentSnapshot.data()?.Messages??[]
            setMessages(Result)
          });
        return () => {
            subscriber()
            setDetailsOfSelectedChat(null)
        } 
    }, []);

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
        setMessages(UpdatedMessages)
        try {
            if(DocumentId){
                await firestore().doc("Chats/" + DocumentId).set({Messages:UpdatedMessages},{merge:true})
            }else{
                await firestore().collection("Chats").add({
                    Users:[UserId,user.uid],
                    UsersInformation:[
                        {UserId:user.uid,Name:userInformation.Name,ProfilePhoto:userInformation.ProfilePhoto,Number:userInformation.Number},
                        {UserId:UserId,Name:Name||null,ProfilePhoto:ProfilePhoto||null,Number:Number},
                    ],
                    Messages:UpdatedMessages
                })
            }
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
                style={{width:"100%",height:"100%",position:"absolute"}}
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
            <KeyboardAvoidingView behavior={Platform.OS=="ios"?"padding":null} >
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
})
