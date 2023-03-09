import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from "react-native"
import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { Entypo } from '@expo/vector-icons'; 



const Account = () => {
  
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
             <Animatable.Image 
             animation='flipInY'
             source={require('../../assets/logo.png')} 
            style={styles.images}/>

            <Text style={styles.text}> Cadastrar - me </Text>


                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                />
                 <TextInput
                    style={styles.phone}
                    placeholder="Numero de Telemovel"
                />
                
                <TextInput
                    style={styles.password}
                    placeholder="A senha"
                />


                <TouchableOpacity style={styles.botao} onPress={() =>navigation.navigate('Routes')}> 
                    <Text style={styles.botaoText}> Criar Conta</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.botaoCadastro} onPress={()=>navigation.navigate('Login')}> 
                    <Text style={styles.TextCadastro}> Fazer Login</Text>
                    </TouchableOpacity>


                    <TouchableOpacity  onPress={()=>navigation.navigate('Termos')}> 
                    <Entypo name="circle" size={12} color="black" style={styles.icon} />
                    <Text style={styles.politica}>Ler Os Termos e Condicoes Aqui</Text>
                    </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        padding:21,


    },
    images:{
        width:101,
        height:101,
        top:-100

    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        top:-100
    },

    input:{
        backgroundColor: '#D9D9D9',
        width:'100%',
        height:'8%',
        borderRadius:8,
        top:-78,
        fontSize:20

        
    },
    password:{
        backgroundColor: '#D9D9D9',
        width:'100%',
        height:'8%',
        borderRadius:8,
        top:-40,
        fontSize:20

        
    },

phone:{
    backgroundColor: '#D9D9D9',
    width:'100%',
    height:'8%',
    borderRadius:8,
    top:-60,
    fontSize:20
    
},


    botao:{
        backgroundColor: '#8CC63E',
        width:'100%',
        height:'8%',
        borderRadius:8,   
        alignItems:'center',
        top:-20

        
    },

    botaoText
    :{
        flex:1,
       color:'#000000',
       padding:4,
       fontSize:20,
       fontWeight:'bold',
    top:11        
    },

  
    botaoCadastro

    :{
       color:'#000000',
       fontSize:20,
       fontWeight:'bold',
    },
    TextCadastro

    :{
       color:'#000000',
       fontSize:14,
       fontWeight:'bold',
    },
    politica

    :{

        top:15,

        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",    },


        icon

        :{
            left:-18,
            top:30,
    
               },

    

    
})

export default Account