import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import AuthorizationSc from '../Screens/AuthorizationSc';
import BottomTabRouter from './BottomTabRouter';

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
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}}
            name="AuthorizationSc" component={!user?AuthorizationSc:BottomTabRouter}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default MainRouter;