import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  Alert,
} from "react-native";
import Background from "./Backgraund";
import Field from "./Field";
import React, { useState } from "react";
import Btn from "./Btn";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from '../firebase-config'
const { height, width } = Dimensions.get("window");

const Login = (props) => {
  const URL_BASE = "http://192.168.0.2:3001/api/v1/sads";

  // Hooks necesarios para el login:
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isContraseñaEmpty, setIsContraseñaEmpty] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  const handleCreateAccount = async () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((res)=> {
      console.log('Cuenta creada');
      const user = res.user;
      console.log(user);
      navigation.navigate("salas");
    })
    .catch((error)=> {
      console.log(error)
      alert(error)
    })
    

  }

  const handleLoginPress = async () => {
    // manejador de errores de el login con un try catch
    signInWithEmailAndPassword(auth, email, password)
    .then((res)=> {
      console.log('Sesion iniciada!');
      const user = res.user;
      console.log(user);
      navigation.navigate("salas");
    })
    .catch((error)=> {
      console.log(error)
       alert(error)
    })
     

    
   
  };

  return (
   
      <View style={{backgroundColor: '#ffd166', height: 1700}}>
       
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
              marginBottom: 30,
            }}
          >
            Bienvenido
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: width * 0.04,
              fontWeight: "bold",
              marginBottom: height * 0.02,
            }}
          >
            Inicia sesión o registrate con tu cuenta 
          </Text>
          <Field
            onChangeText={(text)=> setEmail(text)}
            placeholder="Correo electrónico"
            keyboardType={"email-address"}
          />
          
          <Field
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text)=> setPassword(text)}
          />

          
          
          <Btn
            textColor="white"
            bgColor={"black"}
            btnLabel="Login"
            Press={handleLoginPress}
          />
           <Text style={{ fontSize: width * 0.04 }}>¿No tienes cuenta? </Text>
          <Btn
            textColor="white"
            bgColor={"black"}
            btnLabel="Registrate"
            Press={handleCreateAccount}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: height * 0.02,
            }}
          >
           
            
          </View>
        </View>
      </View>
      </View>
   
  );
};

export default Login;
