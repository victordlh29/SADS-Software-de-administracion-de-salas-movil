import {  TextInput } from "react-native";
import React from "react";

const Field = ({ onChangeText,...props}) => {
    return (
      <TextInput
        
        {...props}
        onChangeText={onChangeText}
        style={{borderRadius: 100, color: 'black', paddingHorizontal: 10, width: '85%',height:'6%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
        placeholderTextColor={'black'}
        
        ></TextInput>
    );
  };

  export default Field;