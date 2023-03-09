import React from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {Feather} from "@expo/vector-icons"
import { FontAwesome5 } from '@expo/vector-icons'; 

// Setting StatusBar height th first checking is device is Android or Ios
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight=22 :30;

export default function CozinhaHeder () {
    return (
        <View style={styles.container}>

 <TouchableOpacity activeOpacity={0.7} style={styles.buttonBack}>
                    <Feather name='arrow-left' size={27} color='#fff'/>
                </TouchableOpacity>

            <View style={styles.content}>
             <Text style={styles.username}>Cozinhas</Text> 

              <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>

                    <FontAwesome5 name="user-circle"  size={27} color='#fff' />     

                </TouchableOpacity>  

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        paddingTop:StatusBarHeight,
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:24
    },
    content:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        top:12,
        left:79



    },
    buttonUser:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:44,
        top:12
        
    },

    buttonBack:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        top:12
        
    }
})