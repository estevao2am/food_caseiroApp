import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,Feather} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

// Importing Pages

import Main from './pages/Main'
import Search from './pages/Search';
import Cozinha from './pages/Cozinha'
import Historico from './pages/Historico'




const Tab = createBottomTabNavigator()

const Routes = () =>{
  // Customizar a Barra com os seu icons
    return (
        <Tab.Navigator  
        screenOptions={{
            tabBarActiveTintColor:'#8CC63E',
            tabBarInactiveTintColor: 'black', // cor dos icones

            tabBarStyle: {
              height:70,
              paddingBottom:5,
              paddingBottom:9,
              

              
            }
          }}>

             <Tab.Screen 
             name='Inicio'
            component={Main}
            options={{
            tabBarIcon: ({size,color}) =>
            (<SimpleLineIcons name="home" size={size} color={color} />),
            headerShown:false, // Removendo o Header que vem por default com O TabBar
            }}  
            />


                  <Tab.Screen 
             name='Historico'
            component={Historico}
            options={{
            tabBarIcon: ({size,color}) =>
            (<Entypo name='calendar' size={size} color={color}/>),
            headerShown:false, // Removendo o Header que vem por default com O TabBar

            }}  
            />

                <Tab.Screen 
             name='Search'
            component={Search}
            options={{
            tabBarIcon: ({size,color}) =>
            (<Feather name='search' size={size} color={color}/>),
            headerShown:false, // Removendo o Header que vem por default com O TabBar

            }}  
            />

<Tab.Screen 
             name='Cozinha'
            component={Cozinha}
            options={{
            tabBarIcon: ({size,color}) =>
            (<FontAwesome5 name="user" size={size} color={color} />),
            
            headerShown:false, // Removendo o Header que vem por default com O TabBar

            }}  
            />
           
            
            
        </Tab.Navigator>
    )
}


export default Routes