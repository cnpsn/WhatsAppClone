import React,{useState,useEffect,useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';
// Pages
import AuthorizationSc from '../Screens/AuthorizationSc';
import BottomTabRouter from './BottomTabRouter';
import ChatSc from '../Screens/ChatSc';
import ContactInfoSc from '../Screens/ContactInfoSc';
// Store
import ChatProvider from '../Contexts/ChatContex';
import { GlobalContext } from '../Contexts/GlobalContext';

const Stack = createNativeStackNavigator();

function MainRouter() {
    const [initializing, setInitializing] = useState(true);
    const {user,setUser,setuserInformation} = useContext(GlobalContext)

    async function getUserInformation(userId) {
        const User = await firestore().doc("Users/" + userId).get()
        setuserInformation(User.data())
    }

    function onAuthStateChanged(user) {
        if(user?.uid){
            getUserInformation(user.uid)
        }
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);
    
    if (initializing) return null;
    
    return (
    <ChatProvider>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}}
            name="AuthorizationSc" component={!user?AuthorizationSc:BottomTabRouter}
            />
            <Stack.Screen options={{headerShown:false}}
            name="ChatSc" component={ChatSc}
            />
            <Stack.Screen options={{headerShown:false}}
            name="ContactInfoSc" component={ContactInfoSc}
            />
        </Stack.Navigator>
    </NavigationContainer>
    </ChatProvider>
    )
}
export default MainRouter;