import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizationSc from '../Screens/AuthorizationSc';

const Stack = createNativeStackNavigator();

function MainRouter() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}}
            name="AuthorizationSc" component={AuthorizationSc}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default MainRouter;