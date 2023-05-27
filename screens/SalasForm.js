import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from "react-native";
import Background from "./Backgraund";
import Field from "./Field";
import React, { useState } from "react";
import Btn from "./Btn";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { database } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore'



const { height, width } = Dimensions.get("window");

const SalasForm = (props) => {

  // Hooks necesarios para el login:


  const [nombre, setNombre] = useState("")
  const [estado, setEstado] = useState("disponible")
  const [fechaInicio, setFechaInicio] = useState("")
  const [fechaFinaliza, setFechaFinaliza] = useState("")
  const [tipoSala, setTipoSala] = useState("")

  const navigation = useNavigation();
  const handleAddAalas = async () => {
    // manejador de errores de el login con un try catch

    // Obtén una referencia a la colección "salas"
    // const salasCollection = firebase.firestore().collection('salas');

    // Crea un objeto con los datos de la sala
    const sala = {
      nombre: nombre,
      tipoSala: tipoSala,
      fechaInicio: fechaInicio,
      fechaFinaliza: fechaFinaliza,
      estado: 'disponible',
      createdAt: new Date()
    };

    try {
      await addDoc(collection(database, 'salas'), sala)
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error)
    }
    // // Agrega la sala a la colección "salas"
    // salasCollection.add(sala)
    //   .then((docRef) => {
    //     console.log("Sala agregada con ID: ", docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error("Error al agregar la sala: ", error);
    //   });




  };

  return (

    <View style={styles.containerForm}>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            padding: width * 0.05,

            alignItems: "center",
            justifyContent: "center",

            height: height * 0.7,
            width: width * 0.8,
            marginVertical: height * 0.1,
          }}
        >
          <Text
            style={{
              fontSize: width * 0.1,
              color: "black",
              fontWeight: "bold",

            }}
          >
            Crear una sala
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: width * 0.04,
              fontWeight: "bold",
              marginBottom: height * 0.02,
            }}
          >

          </Text>
          <Field
            onChangeText={setNombre}
            placeholder="Nombre"

          />

          <Field
            placeholder="Tipo de sala"
            onChangeText={setTipoSala}
          />
          <Field
            placeholder="Fecha inicio"
            onChangeText={setFechaInicio}
          />
          <Field
            placeholder="Fecha finalizacion"
            onChangeText={setFechaFinaliza}
          />



          <View style={{ marginVertical: 30 }}>
            <Btn
              textColor="white"
              bgColor={"black"}
              btnLabel="Crear sala"
              Press={handleAddAalas}
            />


          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: height * 0.02,
            }}
          >
            <TouchableOpacity
              onPress={() => { navigation.navigate('salas') }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: width * 0.06,
                }}
              >
                Atras
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );
};

export default SalasForm;

const styles = StyleSheet.create({
  containerForm: {
    backgroundColor: '#ffd166',
    height: '100%',
    flex: 1
  },
  buttonAtras: {
    alignItems: 'center'
  }
})