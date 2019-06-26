import React from 'react';
import {Text, View, TouchableNativeFeedback,Image, ScrollView} from 'react-native';

import styles from "./Styles";
import { Actions } from 'react-native-router-flux';

class Sidebar extends React.Component {


    openBasicComponentScreen = () =>{
     Actions.basiccomponents();
    }
   
    openSocialComponentScreen=()=>{
        const newValue='yellow'
        const  textStyles= {
            color: '#fff',
            fontSize: 22,
            fontWeight: '900',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 5,
            paddingBottom: 5
           }
        Actions.socialLogincomponent({newColor:textStyles});
    }

  render() {

    return (
      <ScrollView style={styles.sidebarContainer}>
          <TouchableNativeFeedback onPress={ this.openBasicComponentScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('../../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Basic Components</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          
          <TouchableNativeFeedback onPress={this.openHomeScreen}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('../../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Home</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
      </ScrollView>
    );
  }
}

export default Sidebar;