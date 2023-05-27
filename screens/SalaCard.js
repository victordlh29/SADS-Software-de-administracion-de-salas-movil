import * as React from "react";

import { database } from "../firebase-config";
import { deleteDoc, doc, updateDoc , collection, addDoc} from "firebase/firestore";

import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Btn from "./Btn";
import { useNavigation } from "@react-navigation/native";

export default function Sala({
    id,
  nombre,
  tipoSala,
  fechaInicio,
  fechaFinaliza,
  estado,
}) {

    const navigation = useNavigation()
    const handleUpdateEstado =  async () => {
        const docRef = doc(database, 'salas', id)
        updateDoc(docRef, {
            estado: 'no disponible',

        })

        const reserva = {
            nombreSala: nombre,
            tipoSala: tipoSala,
            fechaInicio: fechaInicio,
            fechaFinaliza: fechaFinaliza,
            estado: 'reservado',
            createdAt: new Date()
          };
          await addDoc(collection(database, 'reservas'), reserva)
          

    }
  return (
    <View style={styles.salasContainer}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.tipoSala}>{tipoSala}</Text>
      <Text style={styles.fechas}>{fechaInicio}</Text>
      <Text style={styles.fechas}>{fechaFinaliza}</Text>
      <View>
        {estado == "disponible" ? (
          <View>
            <Text style={styles.disponible}>{estado}</Text>
          <View style={styles.containerButtom}>
          <Btn style={styles.buttonReservar}
            textColor="white"
            bgColor={"#fcbf49"}
            btnLabel="Reservar"
            Press={handleUpdateEstado}
          />
        </View>
          </View>
        ) : (
          <Text style={styles.noDisponible}>{estado}</Text>
        )}
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  salasContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
  },
  nombre: {
    fontSize: 50,
  },
  tipoSala: {
    fontSize: 32,
    fontWeight: "bold",
  },
  fechas: {
    fontSize: 24,
    fontWeight: "bold",
    color: "grey",
  },
  button: {
    backgroundColor: "#0fa5e9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  disponible: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
  noDisponible: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
  containerButtom: {
    marginLeft: 50
  },
  buttonReservar: {
    
  }
});
