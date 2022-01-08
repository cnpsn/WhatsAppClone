import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
// Pages
import AuthorizationSc from '../Screens/AuthorizationSc';
import BottomTabRouter from './BottomTabRouter';
import ChatSc from '../Screens/ChatSc';
// Store
import ChatProvider from '../Contexts/ChatContex';

const Stack = createNativeStackNavigator();

function MainRouter() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
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
        </Stack.Navigator>
    </NavigationContainer>
    </ChatProvider>
    )
}
export default MainRouter;