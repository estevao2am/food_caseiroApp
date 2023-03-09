import React from "react";
import { View, Image,Text, StyleSheet } from "react-native";
import Actions from "../Actions";

export default function Balance({Balance,Expense}) {
  return (
    <View >

      <Image source={require('../../../assets/body.png')} style={styles.container}/>
      <Actions/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection:'row',
    justifyContent:'space-between',
    width:344,
    marginTop:20,
    marginStart:16,
    marginEnd:16,
    borderRadius:10,
    paddingTop:22,
    paddingBottom:22,
    zIndex:99

  },

  
});
