import React,{useEffect,useState} from 'react'
import { View, StyleSheet, FlatList,Text } from 'react-native'
import { useTheme } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
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

    const UserID = "vNkaxbgl8vX8TolgpUldY3019bf2"

    const GetChats = async() => {
        try {
            const Chats = await firestore().collection('Chats').where('Users', 'array-contains', UserID).get()
            const HelperArray = [];
            Chats.forEach(documentSnapshot => {
                const {Messages,UsersInformation} = documentSnapshot.data()
                const {UserName,UserPhoto,UserId} = UsersInformation.find(el => el.UserId!=UserID)
                const LastMessage = Messages[0]?.Text
                const LastMessageDate = Messages[0]?.CreatedAt
                HelperArray.push({UserName,UserPhoto,UserId,LastMessage,LastMessageDate})
            })
            setDATA(HelperArray)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        GetChats()
        return () => {}
    },[])

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