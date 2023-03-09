import React from 'react'
import{Text,View,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'

const Content = () => {
    return (


        <View  >

<View style={styles.lore} >
            <Text>
            orem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum 
            has been the industry's standard dummy text ever since the 1500s, when an un

, but the majority have suffered alteration in some form, by injected h
umour, or randomised words which don't look even slightly believable. If you a
re going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidd
en in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chun\
ks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 L\
atin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks re\
asonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-
cha
racteristic words etc.



            </Text>
            <Text>
            orem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum 
            has been the industry's standard dummy text ever since the 1500s, when an un

, but the majority have suffered alteration in some form, by injected h
umour, or randomised words which don't look even slightly believable. If you a
re going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidd
en in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chun\
ks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 L\
atin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks re\
asonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-
cha
racteristic words etc.



            </Text>
            </View >


            <TouchableOpacity style={styles.botao}> 
                    <Text style={styles.botaoText}> Guardar</Text>
                    </TouchableOpacity>
            
        </View>
    )
}



const styles = StyleSheet.create({
    botao:{
        backgroundColor: '#8CC63E',
        width:350,
        height:70,
        left:14,
        borderRadius:8,   
        alignItems:'center',
        top:44
    
        
    },
    
    botaoText
    :{
        flex:1,
       color:'#000000',
       padding:4,
       fontSize:20,
       fontWeight:'bold',
    top:22       
    },
    lore
    :{
    top:22,
    alignContent:'center',
    justifyContent:'center',
    marginLeft:22,
    marginEnd:22            
    },
})

export default Content