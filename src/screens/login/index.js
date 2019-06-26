import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";


import  InputText from "../../components/inputText";
import Button from "../../components/button";

import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            PickerValueHolder: ""
        };
    }

    onIconPress = () => {
        this.setState({
            isPasswordShown: !this.state.isPasswordShown
        });
    }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    onSubmit = values => {
        alert('Login Successful');
        //redirectTo("app")
    }

    renderTextInput = (field) => {
      //console.log("field");
        const { meta: { touched, error }, placeholder, isPassword, onIconPress, keyboardType, label, secureTextEntry, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    label={label}
                    onIconPress={onIconPress}
                    secureTextEntry={secureTextEntry}
                    isPassword={isPassword}
                    placeholder={placeholder}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }



    render() {
        const { Email, Password, handleSubmit } = this.props;

        return (
            <View style={[styles.appContainer, styles.whiteBackground]}>
                <View style={{ flex: 8 }}>
                    <View style={styles.loginFormCont}>
                        <View style={styles.loginLogoContainer}>
                           
                        </View>
                        <View>
                            <Field
                                style={{ marginTop: 0 }}
                                name="email"
                                label="Email"
                                placeholder="Enter Email Address"
                                component={this.renderTextInput}
                            />
                            <Field
                                name="password"
                                label="Password"
                                component={this.renderTextInput}
                                placeholder="Enter Password"
                                onIconPress={this.onIconPress}
                                isPassword={true}
                                secureTextEntry={!this.state.isPasswordShown}
                            />
                        </View>
                    </View>
                </View>
                <View style={{justifyContent: "flex-end" }}>
                    <Button
                        buttonName="Login"
                        onPress={handleSubmit(this.onSubmit)} />

             
                    <View style={styles.loginFooterTextContainer}>
                        <Text style={[styles.fontSize16, styles.colorBlack, { marginRight: 7 }]}>
                            Do not have an account yet?
                  </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required"
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter valid email address";
    }
    if (!values.password) {
        errors.password = "Required"
    }
    return errors;
}

const mapStateToProps = state => ({
  auth:state.auth
});

const mapDispatchToProps = dispatch => ({
  
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "Login",
        validate
    })
)(Login);