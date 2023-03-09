import React from "react";
import { View, Text ,StyleSheet,FlatList,ScrollView} from "react-native";
import Actions from "../Components/Actions"
import Balance from "../Components/Balence";
import Header from "../Components/Header";
import ProductList from "../Components/ProductsList";
import Opened from "../pages/DrawerNavigation"



const Main = () => {
  return (
    <View >
      <Header name='FOOD CASEIRO'/>
      <ScrollView showsVerticalScrollIndicator={false}
       style={{width:'100%'}}
       >
       <Balance /> 
       <View >
      <ProductList/>
      
      </View>

      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    margin:14

  },
  list:{
    marginStart:14,
    marginEnd:14
  }
});

export default Main;
