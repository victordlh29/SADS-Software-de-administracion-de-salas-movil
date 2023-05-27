import React, { useEffect, useState } from "react";
// import firebase from 'firebase/compat/app';

import "firebase/compat/firestore";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { database } from "../firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import SalaCard from "./SalaCard";
import Background from "./Backgraund";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SalasComponent = () => {
  const [salas, setSalas] = useState([]);
  const navigation = useNavigation();

  const handleLogin = () => {
    alert("Sesión finalizada");
    navigation.navigate("Home"); // redirige al dashboard
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  handleListSalas = () => {
    navigation.navigate("salas");
  };
  handleAddSalas = () => {
    navigation.navigate("SalasForm");
  };
  handleReservas = () => {
    navigation.navigate('reservas')
}

  useEffect(() => {
    const collectionRef = collection(database, "salas");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    console.log(q);
    const onSuscribes = onSnapshot(q, (querySnapshot) => {
      setSalas(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().nombre,
          tipoSala: doc.data().tipoSala,
          fechaInicio: doc.data().fechaInicio,
          fechaFinaliza: doc.data().fechaFinaliza,
          estado: doc.data().estado,
        }))
      );
    });

    return onSuscribes;
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>    SADS Salas</Text>
        <View style={{ flex: 1 }}></View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.containerSalasList}>
          {salas.map((sala) => (
            <SalaCard key={sala.id} {...sala} />
          ))}
        </View>
      </ScrollView>

      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity>
            <Text style={styles.menuItem} onPress={handleListSalas}>
              Lista de salas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem} onPress={handleAddSalas}>
              Agregar Salas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem} onPress={handleReservas}>Reservas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem} onPress={handleLogin}>
              Cerrar sesión
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SalasComponent;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingVertical: 16,
    backgroundColor: "#ffd166",
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
    width: "100%",
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  menu: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
  },
});
