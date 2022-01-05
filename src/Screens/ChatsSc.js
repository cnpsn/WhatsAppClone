import React,{useEffect,useState} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useTheme } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import SignOut from '../Methods/SignOut'
// Components
import Header from '../Components/Header';
import ChatsCard from '../Components/ChatsCard';
import Title from '../Fonts/Title';
// Icons
import Edit from '../Assets/SvgIconsComponents/Edit'
// Style
import GeneralStyles from '../Styles/GeneralStyles';

export default function ChatsSc() {
    const {colors} = useTheme()
    const [DATA, setDATA] = useState([])

    const Exit = () => SignOut()

    const UserID = "vNkaxbgl8vX8TolgpUldY3019bf2"

    const GetChats = async() => {
        try {
            const Chats = await firestore().collection('Chats').where('Users', 'array-contains', UserID).get()
            const HelperArray = [];
            Chats.forEach(documentSnapshot => {
                const {Messages,UsersInformation} = documentSnapshot.data()
                const {UserName,UserPhoto,UserId} = UsersInformation.find(el => el.UserId!=UserID)
                const LastMessage = Messages[0]?.Text
                HelperArray.push({UserName,UserPhoto,UserId,LastMessage})
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
                {/* <Text style={{fontSize:40,fontWeight:"bold"}} onPress={Get}>Getir</Text> */}
                {/* <Text style={{fontSize:40,fontWeight:"bold",marginVertical:20}} onPress={Exit}>Çık</Text> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body:{
        flex:1,
    }
})