import React from 'react'
import{Text,View} from 'react-native'
import SearchItem from '../Components/Search'
import SearchInput from '../Components/Search/input'
import ProductResult from '../Components/Search/ProdutResult'
const Search = () => {
    return (

        <View>
            <SearchItem/>
            <SearchInput/>
            <ProductResult/>
            
        </View>
    )
}

export default Search