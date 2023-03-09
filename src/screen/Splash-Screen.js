import React from "react"
import {View,StyleSheet,Image} from "react-native"

const Splash = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} 
            style={styles.image}/>
        </View>
    )
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:"center"

    },
    image:{
        width:203,
        height:203,
        justifyContent:"center"
    },
 
})


export default Splash