import React,{useEffect,useState,useContext} from 'react'
import { View, StyleSheet, FlatList,Text } from 'react-native'
import { useTheme } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {GlobalContext} from '../Contexts/GlobalContext'
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
    const [DATA, setDATA] = useState([])
    const {user} = useContext(GlobalContext)
    const UserID = user.uid

    const GetChats = async() => {
        try {
            const Chats = await firestore().collection('Chats').where('Users', 'array-contains', UserID).get()
            const HelperArray = [];
            Chats.forEach(documentSnapshot => {
                const {Messages,UsersInformation} = documentSnapshot.data()
                const {UserName,UserPhoto,UserId} = UsersInformation.find(el => el.UserId!=UserID)
                const {id} = documentSnapshot
                const LastMessage = Messages[Messages.length-1]?.Text
                const LastMessageDate = Messages[Messages.length-1]?.CreatedAt
                const LastMessageUserId = Messages[Messages.length-1]?.UserId
                HelperArray.push({UserName,UserPhoto,UserId,LastMessage,LastMessageDate,LastMessageUserId,DocumentId:id})
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
            <Header 
            left={{content:<Title style={{color:colors.primary}}>Düzenle</Title>}}
            center={{content:<Title>Sohbetler</Title>}}
            right={{content:<Edit/>}}
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
    }
})