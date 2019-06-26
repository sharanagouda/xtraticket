import React, {Component} from 'react';
import { Text, View, TouchableOpacity,ActivityIndicator, TextInput, Image} from 'react-native';
import styles from "./styles";
import ButtonComponent from "../../components/button";
import Input from "../../components/inputField";
import Title from "../../components/title";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import {createUser} from "../../actions/AuthActions";



class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isPasswordShown: false,
        pickerViewHideIOS: false,
        modalVisible: false,
        language: "English (EN)",
        pickerValue: "",
        user: "",
        password: "",
        showLunagePickerAndroid: false
    };
   
    // this.renderTextInput = this.renderTextInput.bind(this);
    this.renderInputField = this.renderInputField.bind(this);
    this.onShowPasswordIconPress = this.onShowPasswordIconPress.bind(this);
        //this.onChange = this.onChange.bind(this);
}
onChangeUser = value =>{
  this.setState({
    user:value
  });
};

onChangePassword = value =>{
  this.setState({
    password:value
  })
}
onShowPasswordIconPress() {
  this.setState({
      isPasswordShown: !this.state.isPasswordShown
  });
}
onSubmit=()=> {
  console.log(values);
  this.props.createUser(this.state.user, this.state.password);
}

//   renderTextInput(field) {
//     const { meta: { touched, error }, placeholder, isPassword, onIconPress, keyboardType, label, secureTextEntry, autoCapitalize, input: { onChange, ...restInput } } = field;
//     return (
//         <View>
//             <Input
//                 onChangeText={onChange}
//                 keyboardType={keyboardType}
//                 label={label}
//                 onIconPress={onIconPress}
//                 secureTextEntry={secureTextEntry}
//                 isPassword={isPassword}
//                 placeholder={placeholder}
//                 autoCapitalize={autoCapitalize}
//                 {...restInput} />
//             {touched ? <Text style={styles.errorTextColor}>{error}</Text> : null}
//         </View>
//     );
// }
renderInputField ({placeholder, isPassword, onIconPress,returnKeyType,maxLength, keyboardType, label, secureTextEntry, autoCapitalize, onChangeText,value}) {
  
  return(
    <View style={[styles.textInputContainer, this.props.styles]}>
                <Text style={styles.textInputLabel}>{label}</Text>
                <TextInput
                    style={styles.textInputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor= "rgb(51, 51, 51)"
                    returnKeyType={returnKeyType}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    keyboardType= {keyboardType}
                    maxLength= {maxLength}
                    autoCapitalize= {autoCapitalize}
                    onChangeText= {onChangeText}  />
                {isPassword &&
                  <View style={styles.passwordEyeIconCont}>
                  <TouchableOpacity onPress={onIconPress}>
                  <Image source={secureTextEntry ? require('../../assets/signup/hide.png') : require('../../assets/signup/view.png')} style={{width:22,height:16.6}}/>
                   </TouchableOpacity>
                </View>

                }
            </View>
  )
}
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Title title="App Name"/>
            <View>
            <Field
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Email Address"
            component={this.renderInputField}
            autoCapitalize="none"
          
        />
        <Field
            name="password"
            label="Password"
            component={this.renderInputField}
            placeholder="Password"
            onIconPress={this.onShowPasswordIconPress}
            isPassword={true}
            secureTextEntry={!this.state.isPasswordShown} 
           
            />
        </View>
        <ButtonComponent onPress={handleSubmit(this.onSubmit)} buttonName="Login"/>
      </View>
    );
  }
}

const mapStateToProps = state =>({
  auth:state.auth
});

const mapDispatchToProps = dispatch =>({
  createUser : (email,password) => dispatch(createUser(email,password))
});

export default compose(connect(mapStateToProps,mapDispatchToProps), reduxForm({
  form: "Register"
}))(Register);