import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get('window');

export default function Btn({bgColor, btnLabel, textColor, Press}) {
    return (
      <TouchableOpacity
      onPress={Press}
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: 'center',
          width: width* 0.6,
          paddingVertical: 5,
          marginVertical:10,
        }}>
        <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
  }