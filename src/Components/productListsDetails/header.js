import React from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import {Feather} from "@expo/vector-icons"
import {useNavigation} from '@react-navigation/native'



// Setting StatusBar height th first checking is device is Android or Ios
//const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight=22 :64;

export default function Header () {
    const navigation = useNavigation()

    return (
        <View style={{alignItems:'center'}}>

      

            <View >

            <Image 
            source={require('../../../assets/bolo.jpeg')} 
            style={{width:400, height:300,resizeMode:'contain'}}/>

            </View>
            <View style={{backgroundColor:"#00000075", height:100,width:'100%',top:-300}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Main')}
        activeOpacity={0.7} style={{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        top:44,
        
    }}>
                    <Feather name='arrow-left' size={30} color='#fff' />
                </TouchableOpacity>
        </View>

            <View style={{ alignItems:'center', margin:-40,top:-33,marginStart:-200 }}>
                <Text style={{fontSize:20}}>Batatas com Natas </Text>
                <Text style={{fontSize:20,fontWeight:'bold', margin:20,marginLeft:-19}}>KZ 7000, 00</Text>

            </View>

            <View style={{width:'100%', height:'24%', justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFF'}}>

            <Image 
            source={require('../../../assets/bolo.jpeg')} 
            style={{left:-130, width:88, height:80,borderRadius:108,}}/>

            <Text style={{top:-66 }}>Batatas com Natas </Text>
            <Text style={{top:-55 }}>Nova Vida</Text>

                <Text style={{top:-30, marginStart:130, marginEnd:3 }}>Este pdddddra o bem estar das pessoo</Text>
            </View>



        <View style={{
        
        }}>
          <TouchableOpacity  onPress={()=>navigation.navigate('Confirm')} 
          style={{backgroundColor:'#8CC63E',
          width:354,
          height:64,
          top:33,
          borderRadius:8,

          }}> 
                    <Text  
                     style={{ color:'#000000',
                     fontSize:18,
                     left:130,
                     fontWeight:'bold',
                     top:20
           
                     }}
                    
                    > Encomendar</Text>
                    </TouchableOpacity>
        </View>

            </View>






        
    )
}

const styles = StyleSheet.create({
 
  
})