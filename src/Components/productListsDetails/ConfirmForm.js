import React from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {Feather} from "@expo/vector-icons"
import {useNavigation} from '@react-navigation/native'





// Setting StatusBar height th first checking is device is Android or Ios
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight=22 :30;

export default function Header () {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

 <TouchableOpacity activeOpacity={0.7} style={styles.buttonBack}>
                    <Feather name='arrow-left' size={27} color='#fff'/>
                </TouchableOpacity>

            <View style={styles.content}>
             <Text style={styles.username}>Endereco para a Entregue</Text> 
 

            </View>

            <View >

        
    <TextInput 
    placeholder='Bairro'
          style={{backgroundColor:'#d9d9d940',
          width:354,
          height:64,
          top:298,
          borderRadius:8,
          left:-222
          }}/> 
                


    <TextInput  
        placeholder='Rua'

          style={{backgroundColor:'#d9d9d940',
          width:354,
          height:64,
          top:310,
          borderRadius:8,
          left:-222
          }}/> 

          
    <TextInput  
        placeholder='Outros Detalhes e Pontos de Referencias'
        underlineColorAndroid="transparent"
        //placeholderTextColor="grey"
        numberOfLines={20}
        multiline={true}

          style={{backgroundColor:'#d9d9d940',
          width:354,
          height:94,
          top:322,
          borderRadius:8,
          left:-222,
          
          }}/> 


<TouchableOpacity
 onPress={()=>navigation.navigate('FinishProduct')}
          style={{backgroundColor:'#8CC63E',
          width:354,
          height:64,
          top:528,
          borderRadius:8,
          left:-222
          }}> 
          <Text style={{
         
          left:140,
          top:21,
          fontWeight:'bold',
          fontSize:18
          }}
          >Confirmar</Text>
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
        top:-208
    },
 
    username:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        top:229,
        left:60



    },
  
    buttonBack:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        top:230
        
    }
})