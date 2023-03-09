import React from 'react'
import{Text,View} from 'react-native'
import CozinhaHeder from '../Components/Cozinha/index'
import SearchCozinha from '../Components/Cozinha/CozinhaSerch'
import CozinhaResult from '../Components/Cozinha/CozinhaResult'

const Cozinha = () => {
    return (

        <View>
            <CozinhaHeder/>
            <SearchCozinha/>
            <CozinhaResult/>
        </View>
    )
}

export default Cozinha