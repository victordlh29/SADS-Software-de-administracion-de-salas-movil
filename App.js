import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import SalasForm from './screens/SalasForm'
import SalasList from './screens/Salas'
import Reservas from './screens/Reservas'




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="salas" component={SalasList} />
        <Stack.Screen name="reservas" component={Reservas} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SalasForm" component={SalasForm} />
        <Stack.Screen name="auth" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


