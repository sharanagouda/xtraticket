import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";

import styles from "./styles";

defaultProps = {
    title: "",
    navIcon: "",
    onIconClicked: ""
}

class Toolbar extends Component {



    render() {
        return (
          <View style={styles.toolbarContainer} >
            <TouchableOpacity onPress={this.props.openDrawer}>
              <View style={styles.menubar}>
                  <Image
                    source={require('./../../assets/menu.png')}
                  />
              </View>
              </TouchableOpacity>
            <View style={styles.toolbarTitle}>
               <Text style={styles.textHeaderStyle} >{this.props.toolbarName}</Text>
            </View>
          </View>
        );
    }
}

export default Toolbar;

Toolbar.defaultProps = defaultProps;