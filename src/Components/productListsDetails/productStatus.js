import React from 'react'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {Feather} from "@expo/vector-icons"
import { FontAwesome5 } from '@expo/vector-icons'; 
import Timeline from 'react-native-timeline-flatlist'
import {useNavigation} from '@react-navigation/native'



// Setting StatusBar height th first checking is device is Android or Ios
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight=22 :30;

export default function ProductStatus () {
    const navigation = useNavigation()

    return (

        <View>
        <View style={styles.container}>

 <TouchableOpacity activeOpacity={0.7} style={styles.buttonBack}>
                    <Feather name='arrow-left' size={27} color='#fff'/>
                </TouchableOpacity>

            <View style={styles.content}>
             <Text style={styles.username}>#000564</Text> 

              <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
              <FontAwesome5 name="user-circle" size={26} color="#fff" />     
                         </TouchableOpacity>  

            </View>

        </View>

        <View style={{left:30,top:44}}>
     
        <View style={styles.timeline}>
          <View style={styles.row}>
            <View style={styles.ball} />
            <Text style={{top:-17}}>Encomenda Feita</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.ball2} />
            <Text style={{top:1}}>A caminho</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.ball3} />
            <Text style={{top:22}}>Entregue</Text>
          </View>
         
        </View>

        </View>


        <View style={{width:350,alignItems:'flex-start',left:17,borderRadius:8, height:220, backgroundColor:'#fff', top:80}}>
            <View style={{ margin:12,}}>
        <Text style={{top:-4}}>Arroz Com Fumbua</Text>
        <Text style={{ fontWeight:'bold',top:2}}>KZ 250 000, 00</Text>
        <Text style={{top:10}}>20/02/2023</Text>
        <Text style={{color:'#00000073', fontWeight:'bold',top:20}}>Endereco</Text>
        <Text style={{top:22}}>Nova Vida</Text>
        <Text style={{color:'#00000073', fontWeight:'bold',top:33}}>Cozinha</Text>
        <Text style={{top:40}}>Forget Home</Text>
        <Text style={{color:'#00000073', fontWeight:'bold', top:45}}>Pagamento</Text>
        <Text style={{top:55}}>TPA - Multicaixa</Text>

        <TouchableOpacity 
         onPress={()=>navigation.navigate('Main')}

        style={{top:100,left:122,}}>
        <Text style={{textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",}}>CANCELAR</Text>

        </TouchableOpacity>

        </View>
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
        paddingBottom:24
    },
    content:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        top:12,
        left:79



    },
    buttonUser:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:44,
        top:12
        
    },

    buttonBack:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems: 'center',
        top:12
        
    },  row: {
        paddingLeft: 20,
        flexDirection: 'row',
        paddingVertical: 20,
        position: 'relative',
        alignItems: 'center'
      },
      ball: {
        borderRadius:10,
        height: 20,
        top:-1,
        width: 20,
        left: -10,
        backgroundColor: '#8CC63E',
        position: 'absolute'
      },
      timeline: {
        borderLeftColor: '#ccc',
        borderLeftWidth: 2,

      },
      ball2: {
        borderRadius:10,
        height: 20,
        width: 20,
        left: -10,
        backgroundColor: '#D2D2D2',
        position: 'absolute'
      },
      ball3: {
        borderRadius:10,
        height: 20,
        width: 20,
        left: -10,
        backgroundColor: '#D2D2D2',
        position: 'absolute',
        top:37,

      },
})