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
import {useNavigation} from '@react-navigation/native'


export default function ProductResult() {

    const navigation = useNavigation() // Fazendo com que o uso da rotas sejam permitidas
 

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        left: -22,
        padding: 7,
        marginTop:22
        
      }}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
      <View style={styles.listas}>
      <Image source={require('../../../assets/bolo.jpeg')} style={styles.images}/>

        <Text style={styles.name}>Bolo de Chocolate</Text>

        <Text style={styles.price}> Kz 2 000, 00</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity >

      <View style={styles.listas}>
      <Image source={require('../../../assets/bolo.jpeg')} style={styles.images}/>

        <Text style={styles.name}>Sumo de Laranja</Text>

        <Text style={styles.price}> Kz 500, 00</Text>
      </View>
      </TouchableOpacity >

     
      


      

      
    </View>
  );
}

const styles = StyleSheet.create({
  listas: {
    flexDirection: "row",

    backgroundColor: "#fff",
    marginTop: 19,
    borderRadius: 8,
    left: 22,
    width: 170,
    height: 220,
    alignItems:'center',
    marginEnd: -22,
    marginStart: -22,
    top:22
},


  images: {
  width:170,
  top:-73,
  borderTopEndRadius:8,
  borderTopLeftRadius:8,
  left:-0,

  height:125,

  },name: {
   
        fontWeight:'bold',
        alignItems:'center',
        left:-155,
        top:12
    },
    price: {
   
        fontWeight:'bold',
        alignItems:'center',
        left:-260,
        top:60
    },
});
