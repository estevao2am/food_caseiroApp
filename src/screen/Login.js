import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,StatusBar} from "react-native"
import {useForm,Controller} from 'react-hook-form'
import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'


const Login = () => {
  
    const navigation = useNavigation()

    return (

        
        <View style={styles.container}>
            



             <Animatable.Image 
             animation='flipInY'
             source={require('../../assets/logo.png')} 
            style={styles.images}/>

            <Text style={styles.text}> Faca Login </Text>


                <TextInput
                    style={styles.input}
                    placeholder="Numero de telefone"
                />
                
                <TextInput
                    style={styles.password}
                    placeholder="A senha"
                />


                <TouchableOpacity style={styles.botao}> 
                    <Text style={styles.botaoText}> Entrar</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.botaoCadastro} onPress={()=>navigation.navigate('Account')}> 
                    <Text style={styles.TextCadastro}> Cadastrar - me</Text>
                    </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        padding:22,


    },
    images:{
        width:101,
        height:101,
        top:-130

    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        top:-111
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
        top:-59,
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

    
})

export default Login