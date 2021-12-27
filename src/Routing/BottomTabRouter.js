import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text,StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper';

// Icons
import Shape from '../Assets/SvgIconsComponents/Shape'
import Setting from '../Assets/SvgIconsComponents/Setting'
// Pages
import ChatsSc from '../Screens/ChatsSc';
import Settings from '../Screens/Settings';

const Tab = createBottomTabNavigator();

export default function BottomTabRouter() {
    return (
    <Tab.Navigator>
        <Tab.Screen  name="ChatsSc" component={ChatsSc}
        options={{
            headerShown:false,
            tabBarLabel:props => <Text style={[styles.label,{color:props.color}]} maxFontSizeMultiplier={1}>Sohbetler</Text>,
            tabBarIcon:props => (<Shape color={props.color} height={34} width={34}/>)
        }}
        />
        <Tab.Screen  name="Settings" component={Settings}
        options={{
            headerShown:false,
            tabBarLabel:props => <Text style={[styles.label,{color:props.color}]} maxFontSizeMultiplier={1}>Ayarlar</Text>,
            tabBarIcon:props => (<Setting color={props.color} height={30} width={30}/>)
        }}
        />
    </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    label:{
        fontSize:10
    }
})
