import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from "./styles";

const defaultProps = {
  backgroundColor: "#1c313a"
}

const ButtonComponent = props =>{
  return(
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonContainer,props.buttonContainer]} disabled={props.disabled}>
      <View>
          <Text style={[styles.textStyles,props.textStyles]}>{props.buttonName}</Text>
      </View>
   </TouchableOpacity>
  )
       
       
}

ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;