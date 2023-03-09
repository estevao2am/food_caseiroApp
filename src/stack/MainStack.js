import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Importing all Screen Stacks -- Primeiras telas a serem carregadas, sem o Menu
import Splash from '../screen/Splash-Screen';
import Login from '../screen/Login';
import Account from '../screen/Client-Accont';
import Routes from '../router'
import Main from '../pages/Main'
import ProductDetails from '../pages/ProductDetails'
import Termos from '../pages/Termos';
import Confirm from '../Components/productListsDetails/ConfirmForm';
import FinishProduct from '../Components/productListsDetails/finishProduct'
import ProductStatus from '../Components/productListsDetails/productStatus'

const Stack = createStackNavigator();

const MainStack = () => {

    return (
    <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
            headerShown:false,
        }}
    >
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Routes" component={Routes}/>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        <Stack.Screen name="Termos" component={Termos}/>
        <Stack.Screen name="Confirm" component={Confirm}/>
        <Stack.Screen name="FinishProduct" component={FinishProduct}/>
        <Stack.Screen name="ProductStatus" component={ProductStatus}/>






    </Stack.Navigator>
    
    )
}

export default MainStack