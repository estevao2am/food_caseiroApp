import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

 function Details() {
  return (
    <View style={styles.container}>
        <View style={styles.details}>
        <Image source={require('../../../assets/bolo.jpeg')} style={styles.image}/>
        <Text>Bolo de Manga</Text>
        <Text>KZ 5 000, 00</Text>



             </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingStart:18,
    paddingEnd:18,
    marginTop:-24,
    marginStart:14,
    marginEnd:14,
    borderRadius:10,
    paddingTop:22,
    paddingBottom:22,
    zIndex:99

  },

  image:{
width:390,
height:362,
top:-170,
left:-33
  },
  details:{
    flexDirection:'row',
    alignItems:'center'
  }

  
});
