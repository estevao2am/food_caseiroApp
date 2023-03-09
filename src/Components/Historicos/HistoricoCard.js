import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

import {useNavigation} from '@react-navigation/native'


export default function HistoricoCard() {

    const navigation = useNavigation() // Fazendo com que o uso da rotas sejam permitidas
 

  return (
    <View
      style={{
        left: -20,
        padding: 7,
        marginTop:22
        
      }}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
      <View style={styles.listas}>

      <Text style={styles.name}>Mufete</Text>

       <Text style={styles.price}> KZ 5000, 00</Text>
       <Text style={styles.data}>12/02/2023 </Text>
       <Text style={styles.estado}> Entregue </Text>

       <MaterialIcons name="navigate-next" size={34} color="#b4b4b4"style={styles.images} />
     
      </View>
      </TouchableOpacity>

      


     
      
   
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  listas: {
    flexDirection: "row",
    top:-19,
    backgroundColor: "#fff",
    marginTop: 14,
    borderRadius: 8,
    left: 42,
    width: '100%',
    height: 150,
    alignItems:'center',
    marginEnd: -22,
    marginStart: -22,
    marginBottom:-3
  },


  images: {
    
top:3,
  height:77,

  },name: {
   
        alignItems:'center',
        left:30,
        top:-38,
fontSize:17
    },
    price: {
   
        fontWeight:'bold',
        left:-21,
        top:-13
    },
    data: {
   
        fontWeight:'bold',
        left:-100,
        top:22
    },
    estado: {
   
        fontWeight:'bold',
        left:-177,
        top:50,
        color:'#3EC674'
    },
  

   
});
