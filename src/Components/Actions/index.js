import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native'
import {AntDesign} from '@expo/vector-icons'


export default function Actions() {

    return (
        <ScrollView style={styles.container} horizontal={true} 
        showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaButton}> 
                <Image source={require('../../../assets/iconssnacks.jpg') } style={styles.images}/>

                </View>
                <Text style={styles.labelbutton}>Salgados</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaButton}> 
                <Image source={require('../../../assets/iconsrefeicoes.jpg') } style={styles.images}/>
                </View>
                <Text style={styles.labelbutton}>Almocos</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaButton}> 
                <Image source={require('../../../assets/iconsbebidas.jpg') } style={styles.images}/>
                </View>
                <Text style={styles.labelbutton}>Bebidas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>

                <View style={styles.areaButton}> 
                <Image source={require('../../../assets/iconsbebidas.jpg') } style={styles.images}/>
                </View>
                <Text style={styles.labelbutton}>Doces</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
    maxHeight:84,
    marginBottom:14,
    marginTop:12,
    paddingEnd:14,
    paddingStart:14, 
    },
    actionButton:{
        alignItems:'center',
        marginRight:32
    },
    areaButton:{
        backgroundColor:'#ecf0f1',
        height:60,
        width:60,
        borderRadius:0,
        justifyContent:'center',
        alignItems:'center'
    },
    labelbutton:{
        marginTop:8,
        textAlign:'center',
        fontWeight:'bold'
    },

    images:{
        width:50,
        height:50,
        size:26,
        borderRadius:27,
        borderColor:'#d35647',
        top:2
       
    },
  
})