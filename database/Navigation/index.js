import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from '../components/ProductScreen';
import ProductDetailsScreen from '../components/ProductDetailsScreen';
import ProductAddScreen from '../components/ProductAddScreen';
import ProductEditScreen from '../components/ProductEditScreen';
import { Button } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductScreen}
        options={({ navigation }) => ({
          title: 'Product List',          
          headerRight: () => (
            <>
                <Ionicons name="add-circle"
                    size={30}
                    style={{ padding: 10, marginHorizontal: 10 }}
                    onPress={() => navigation.navigate('AddProduct')}
                    color="#000"
                />

            </>
        )        
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="AddProduct" component={ProductAddScreen} />
      <Stack.Screen name="EditProduct" component={ProductEditScreen} />
    </Stack.Navigator>
  );
}


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}