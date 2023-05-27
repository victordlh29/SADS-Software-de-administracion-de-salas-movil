import { Dimensions, Image, View, Text } from "react-native";
import Background from "./Backgraund";
import React from "react";
import Btn from "./Btn";

const { height, width } = Dimensions.get('window');

const Home = (props) => {
    return (
        
            <View style={{backgroundColor: '#999', height: 1700}}>
                <View style={{  display: 'flex', justifyContent: 'center', alignItems: 'center',  marginVertical:70, marginHorizontal:40}} >
                <Image source={require("../assets/images/Room__Computer_Etiqueta.png")} style={{ width: width*0.8}} />
                <View style={{marginTop: 50}}>
                <Btn bgColor={'black'} style={{marginVertical: 50}} textColor='white' btnLabel="Inicia con nosotros" Press={() => props.navigation.navigate("auth")} />
                </View>
            </View>
            </View>
        

    );
}

/* const styles = StyleSheet.create({}) */

export default Home;