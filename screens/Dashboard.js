import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from './Backgraund';
import { useNavigation } from '@react-navigation/native';


const Dashboard = () => {

    const navigation = useNavigation();
    const handleLogin = () => {
        alert('Sesión finalizada');
        navigation.navigate('Home'); // redirige al dashboard
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    handleListSalas = () => {
        navigation.navigate('salas')
    }
    handleReservas = () => {
        navigation.navigate('reservas')
    }
    handleAddSalas = () => {
        navigation.navigate('SalasForm')
    }


    return (
        <Background>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={toggleMenu} >
                        <Icon name="bars" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}> BOOKING SADS</Text>
                    <View style={{ flex: 1 }}></View>
                </View>
                      
                      
                {isMenuOpen && (
                    <View style={styles.menu}>
                        <TouchableOpacity>
                            <Text style={styles.menuItem} onPress={handleListSalas}>Lista de salas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.menuItem} onPress={handleAddSalas}>Agregar Salas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.menuItem} onPress={handleReservas}>Reservas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.menuItem} onPress={handleLogin}>Cerrar sesión</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </SafeAreaView>
        </Background>
    );
};


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 60,
        width: '100%',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    menu: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    menuItem: {
        fontSize: 18,
        paddingVertical: 10,
    },
});

export default Dashboard;
