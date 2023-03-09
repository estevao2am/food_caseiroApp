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

export default function FinishProduct () {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>

 <TouchableOpacity activeOpacity={0.7} style={styles.buttonBack}>
                    <Feather name='arrow-left' size={27} color='#fff'/>
                </TouchableOpacity>

            <View style={styles.content}>
             <Text style={styles.username}>Resumo</Text> 
 

            </View>


                  
          <View style={{width:'100%',alignItems:'flex-start',left:-88,borderRadius:8, height:380, backgroundColor:'#fff', top:398}}>
            <View style={{ margin:12,}}>
        <Text style={{fontSize:20,top:13}}>Arroz Com Fumbua</Text>
        <Text style={{ fontWeight:'bold',fontSize:20,top:33}}>KZ 250 000, 00</Text>
        <Text style={{fontSize:20,top:60}}>20/02/2023</Text>
        <Text style={{color:'#00000073', fontWeight:'bold',fontSize:20,top:77}}>Endereco</Text>
        <Text style={{fontSize:20,top:89}}>Nova Vida</Text>
        <Text style={{color:'#00000073', fontWeight:'bold',fontSize:20,top:118}}>Cozinha</Text>
        <Text style={{fontSize:20,top:125}}>Forget Home</Text>
        <Text style={{color:'#00000073', fontWeight:'bold',fontSize:20, top:152}}>Pagamento</Text>
        <Text style={{fontSize:20, top:164}}>TPA - Multicaixa</Text>
        </View>






    </View>

            <View >

 
<TouchableOpacity
          onPress={()=>navigation.navigate('ProductStatus')}

          style={{backgroundColor:'#8CC63E',
          width:354,
          height:64,
          top:849,
          borderRadius:8,
          left:-437
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
top:-302    },
 
    username:{
        fontSize:18,
    color:'#fff',
    fontWeight:'bold',
    top:329,
    left:120



    },
  
    buttonBack:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        top:330
        
    }
})


  