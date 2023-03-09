import React from 'react'
import{Text,View} from 'react-native'
import HistoricoHeder from '../Components/Historicos/index'
import HistoricoCard from '../Components/Historicos/HistoricoCard'

const Historico = () => {
    return (

        <View>
            <HistoricoHeder/>
            <HistoricoCard/>
        </View>
    )
}

export default Historico