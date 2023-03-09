import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'


import MainStack from './src/stack/MainStack';

export default function App() {
  return (

    <NavigationContainer>
     <StatusBar style="light" />
        <MainStack/>
    </NavigationContainer>
  ); 
}



// StatusBar possiblite hero  <StatusBar style="auto" color="red"/> 
