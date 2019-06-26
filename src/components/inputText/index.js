import PropTypes from "prop-types";
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Icon } from "react-native-elements";


import styles from "./styles";

const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string,
    isPasswordType: PropTypes.bool,
    editable: PropTypes.bool,
    numberOfLines: PropTypes.number,
    labelStyle: PropTypes.any,
    id: PropTypes.string
};

const defaultProps = {
    mapElement: () => {},
    onSubmitEditing: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    label: "",
    isPasswordType: false,
    editable: true,
    numberOfLines: 1,
    labelStyle: {},
    returnKeyType: "next",
    styles: {},
    isPassword: false,
    onIconPress: () => {}
}

class InputText extends Component {

    constructor(props) {
        super(props);
        this.state={
            passwordVisible: false,
           
        }
       
    }

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    render() {
        return (
            <View style={[styles.textInputContainer, this.props.styles]}>
                <Text style={styles.textInputLabel}>{this.props.label}</Text>
                <TextInput
                    style={styles.textInputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor= "rgb(51, 51, 51)"
                    returnKeyType={this.props.returnKeyType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType= {this.props.keyboardType}
                    maxLength= {this.props.maxLength}
                    value= {this.props.value}
                    autoCapitalize= {this.props.autoCapitalize}
                    onChangeText= {this.props.onChangeText}  />
                {this.props.isPassword &&
                  <View style={styles.passwordEyeIconCont}>
                  <TouchableOpacity onPress={this.props.onIconPress}>
                  <Image source={this.props.secureTextEntry ? require('../../assets/signup/hide.png') : require('../../assets/signup/view.png')} style={{width:22,height:16.6}}/>
                   </TouchableOpacity>
                </View>

                }
            </View>
        );
    }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;
