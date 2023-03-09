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


export default function CozinhaResult() {

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
      <Image source={require('../../../assets/defecd49-2b36-41b8-b761-7ced2e7b412f_img_0019_0.jpeg')} style={styles.images}/>

        <Text style={styles.name}>Cozinha Mara</Text>

        <Text style={styles.price}> Nova Vida</Text>
      </View>
      </TouchableOpacity>

    
      <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
      <View style={styles.listas}>
      <Image source={require('../../../assets/defecd49-2b36-41b8-b761-7ced2e7b412f_img_0019_0.jpeg')} style={styles.images}/>

        <Text style={styles.name}>Cozinha Mara</Text>

        <Text style={styles.price}> Nova Vida</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')}>
      <View style={styles.listas}>
      <Image source={require('../../../assets/defecd49-2b36-41b8-b761-7ced2e7b412f_img_0019_0.jpeg')} style={styles.images}/>

        <Text style={styles.name}>Cozinha Mara</Text>

        <Text style={styles.price}> Nova Vida</Text>
      </View>
      </TouchableOpacity>
     
      


      

      
    </View>
  );
}

const styles = StyleSheet.create({
  listas: {
    flexDirection: "row",

    backgroundColor: "#fff",
    marginTop: 17,
    borderRadius: 8,
    left: 42,
    width: '100%',
    height: 110,
    alignItems:'center',
    marginEnd: -22,
    marginStart: -22,
    marginBottom:-3
  },


  images: {
  width:84,
  top:-2,
 borderRadius:60,
  left:20,

  height:77,

  },name: {
   
        fontWeight:'bold',
        alignItems:'center',
        left:44,
        top:-9
    },
    price: {
   
        alignItems:'center',
        left:-41,
        top:22
    },
});
