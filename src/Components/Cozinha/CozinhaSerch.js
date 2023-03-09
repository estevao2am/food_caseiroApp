import React from "react";
import { Text, View, StyleSheet,TextInput } from "react-native";

export default function SearchCozinha() {
  return (

    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Pesquisar..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    padding:22,
  },

  input: {
    backgroundColor: "#D9D9D9",
    width: '109%',
    height: 50,
    top:20,
    borderRadius: 8,
    fontSize: 20,
  },
});
