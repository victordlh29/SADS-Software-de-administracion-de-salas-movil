import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, ImageBackground} from 'react-native';


const Background = ({ children }) => {
    return (
      <View style={{ height: 1400 }}>
      <StatusBar style="auto" />
      <ImageBackground source={require("../assets/images/1098137.jpg")} style={{ flex: 1 }} />
      <View style={{ position: "absolute", top: 0 }}>
        {children}
      </View>
    </View>
    );
  }

  export default Background;